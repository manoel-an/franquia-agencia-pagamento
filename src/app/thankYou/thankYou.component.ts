import { Component, OnInit } from '@angular/core';
import { ChkService } from '../service/chk.service';
import { GithubService } from '../service/github-service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment.prod';

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
    const token = environment.token;
    const message = `DB JSon atualizado com novo lead em ${moment(new Date()).format("DD/MM/YYYY")}.`;
    let sha: string;

    try {

      const file = await this.githubService.getFile(owner, repo, path, token).toPromise();

      sha = file.sha;

      const dbJson = {leads: content};

      const str = JSON.stringify(dbJson, null, '\t');

      const newContent = btoa(unescape(encodeURIComponent(str)));

      this.githubService.updateFile(owner, repo, path, newContent, sha, message, token).subscribe(
        response => console.log('File updated successfully', response),
        error => console.error('Error updating file', error)
      );

    } catch (error) {

      console.error('Error getting file', error);

    }
  }
}
