import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';

@Component({
  selector: 'angly-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  /* Variables */
  supportContent: any;

  constructor(private pageTitleService: PageTitleService, private service: ChkService) {

    /* Page title */
    this.pageTitleService.setTitle(" Saiba mais ");

    /* Page subTitle */
    this.pageTitleService.setSubTitle(" Conheça a mecânica de funcionamento. ");


    this.service.getHomeContent().
      subscribe(response => { this.supportContent = response.support_content },
        err => console.log(err),
        () => this.supportContent
      );
  }

  ngOnInit() {
  }


}
