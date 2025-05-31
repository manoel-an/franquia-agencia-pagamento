import { Component, OnInit } from '@angular/core';
import { ChkService } from '../service/chk.service';
import { GithubService } from '../service/github-service';
import * as moment from 'moment';

@Component({
  selector: 'angly-thank-you',
  templateUrl: './thankYou.component.html',
  styleUrls: ['./thankYou.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private chkService: ChkService, private githubService: GithubService) { }

  ngOnInit() {

    this.buscarLeads();

  }

  private buscarLeads() {

    this.chkService.getLeads().subscribe({
      next: (response) => {
        this.escreverJsonGitHub(response);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => console.log('Requisição relizada com sucesso')
    });

  }

  private escreverJsonGitHub(response: any) {
    this.updateFile(response);
  }

  async updateFile(content: any) {
    const owner = 'manoel-an';
    const repo = 'franquia-agencia-pagamento';
    const path = 'data/db.json';
    const token = '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';
    const message = `DB JSon atualizado com novo lead em ${moment(new Date()).format("DD/MM/YYYY")}.`;
    let sha: string;

    try {

      const file = await this.githubService.getFile(owner, repo, path, token).toPromise();

      sha = file.sha;

      const dbJson = {leads: content};

      const newContent = btoa(JSON.stringify(dbJson, null, '\t'));

      this.githubService.updateFile(owner, repo, path, newContent, sha, message, token).subscribe(
        response => console.log('File updated successfully', response),
        error => console.error('Error updating file', error)
      );

    } catch (error) {

      console.error('Error getting file', error);

    }
  }
}
