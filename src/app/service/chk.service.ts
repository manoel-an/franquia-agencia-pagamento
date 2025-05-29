
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

interface Response {
   data: any,
   id: any;
}

@Injectable()
export class ChkService {

   constructor(private http: HttpClient) { }

   /*
   * Get about.
   */
   getAbout() {
      return this.http.get<Response>("assets/data/about.json").pipe(map(response => response.data));
   }

   /**
    * Get services about
    */
   getServicesAbout() {
      return this.http.get<Response>("assets/data/service-about.json").pipe(map(response => response.data));
   }

   /*
   * Get the content of contact page.
   */
   getContactContent() {
      return this.http.get<Response>("assets/data/contact.json").pipe(map(response => response.data));
   }

   /*
   * Get the content of features page.
   */
   getFeaturesContent() {
      return this.http.get<Response>("assets/data/features.json").pipe(map(response => response.data));
   }


   /*
    * Get the content of home page.
    */
   getHomeContent() {
      return this.http.get<Response>("assets/data/home.json").pipe(map(response => response.data));
   }

   /*
    * Get portfolio-v1.
    */
   getPortfolioV1() {
      return this.http.get<Response>("assets/data/portfolio-v1.json").pipe(map(response => response.data));
   }


   /*
    * Get project gallary
    */
   getProjectGallary() {
      return this.http.get<Response>("assets/data/project-gallary.json").pipe(map(response => response.data));
   }




   /*
    * Get services
    */
   getServices() {
      return this.http.get<Response>("assets/data/service.json").pipe(map(response => response.data));
   }



   /*
    * Get testimonial
    */
   getTestimonial() {
      return this.http.get<Response>("assets/data/testimonial.json").pipe(map(response => response.data));
   }

   adicionarLead(lead: any) {
      return this.http.post<Response>(`${environment.url}/api/leads`, lead).pipe(map(response => response.id));;
   }

}
