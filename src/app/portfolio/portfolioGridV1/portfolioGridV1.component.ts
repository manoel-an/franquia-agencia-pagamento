import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../service/chk.service';

@Component({
  selector: 'angly-portfolioGridV1',
  templateUrl: './portfolioGridV1.component.html',
  styleUrls: ['./portfolioGridV1.component.scss']
})
export class PortfolioGridV1Component implements OnInit {

   /* Variables */
  portfolioV1 : any;

  constructor(private service:ChkService, private pageTitleService:PageTitleService) {

      /* Page title */
      this.pageTitleService.setTitle(" Casos de Sucesso ");

      /* Page subTitle */
      this.pageTitleService.setSubTitle(" Venha construir sua história conosco. ");

      this.service.getPortfolioV1().
         subscribe(response => {this.portfolioV1 = response},
                  err      => console.log(err),
                  ()       => this.portfolioV1
               );
  }

  ngOnInit() {
  }

}
