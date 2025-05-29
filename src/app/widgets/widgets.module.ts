import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ServiceGridComponent } from './grid/serviceGrid/serviceGrid.component';
import { GallaryGridComponent } from './grid/gallaryGrid/gallaryGrid.component';
import { HomeContactComponent } from './contact/homeContact/homeContact.component';
import { SendMessageComponent } from './contact/sendMessage/sendMessage.component';
import { MobileFeaturedComponent } from './mobileFeatured/mobileFeatured.component';
import { ChkVideoComponent } from './chkVideo/chkVideo.component';
import { NgMapsGoogleModule } from '@ng-maps/google';
import { NgMapsCoreModule } from '@ng-maps/core';
import { SubscribeComponent } from './subscribe/subscribe.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    NgMapsCoreModule,
    NgMapsGoogleModule.forRoot({
      apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'
    })
  ],
  declarations: [
    ServiceGridComponent,
    GallaryGridComponent,
    SubscribeComponent,
    HomeContactComponent,
    SendMessageComponent,
    MobileFeaturedComponent,
    ChkVideoComponent,
  ],
  exports:[
    ServiceGridComponent,
    GallaryGridComponent,
    SubscribeComponent,
    HomeContactComponent,
    SendMessageComponent,
    MobileFeaturedComponent,
    ChkVideoComponent,
  ]
})
export class WidgetsModule { }
