import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Service */
import { ChkService } from './service/chk.service';

/* components */
import { AppComponent } from './app.component';
import { MainComponent }   from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MenuItems } from './core/menu/menu-items/menu-items';
import { MenuToggleModule } from './core/menu-toggle.module';
import { PageTitleService } from './core/page-title/page-title.service';
import { WidgetsModule } from './widgets/widgets.module';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { Footer2Component } from './footer2/footer2.component';
import { NgMapsGoogleModule } from '@ng-maps/google';
import { NgMapsCoreModule } from '@ng-maps/core';
import { GithubService } from './service/github-service';



@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      HomeComponent,
      ContactComponent,
      HeaderComponent,
      MenuComponent,
      FeaturesComponent,
      AboutComponent,
      SupportComponent,
      Footer2Component,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      WidgetsModule,
      MenuToggleModule,
      SlickCarouselModule,
      NgMapsCoreModule,
      NgMapsGoogleModule.forRoot({
        apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'
      })
   ],
   providers: [
      MenuItems,
      PageTitleService,
      ChkService,
      GithubService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
