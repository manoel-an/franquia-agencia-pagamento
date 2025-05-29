import { Component, OnInit } from '@angular/core';
import { ChkService } from '../service/chk.service';
declare var $: any;

@Component({
   selector: 'angly-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   /* Variables */
   homeContent: any;
   services: any;
   projectGallary: any;
   posts: any;
   team: any;
   pricingContent: any;
   contact: any;
   videoContent: any;
   mobileFeatured: any;
   testimonialV1: any;

   constructor(private service: ChkService) {

      this.service.getHomeContent().
         subscribe(response => { this.homeContent = response },
            err => console.log(err),
            () => this.getContent(this.homeContent)
         );

      this.service.getServices().
         subscribe(response => { this.services = response },
            err => console.log(err),
            () => this.services
         );


      this.service.getProjectGallary().
         subscribe(response => { this.projectGallary = response },
            err => console.log(err),
            () => this.projectGallary
         );


      this.service.getContactContent().
         subscribe(response => { this.contact = response },
            err => console.log(err),
            () => this.contact
         );

         this.service.getTestimonial().
         subscribe(response => { this.testimonialV1 = response },
            err => console.log(err),
            () => this.testimonialV1
         );

   }

   ngOnInit() {
   }


   /*
    * getContent is used for get the home page content.
    * Used variables is videoContent and mobileFeatured.
    */
   getContent(content: any) {
      this.videoContent = content.video_content;
      this.mobileFeatured = content.mobile_featured;
   }

   subscribeFormClasses: any = { rowClass: "row", fieldClass: "col-sm-12 col-md-6" }



}
