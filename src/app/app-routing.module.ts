import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { ThankYouComponent } from './thankYou/thankYou.component';
import { FacebookPixelGuard } from './guards/facebook-pixel.guard';
import { GoogleAnalyticsGuard } from './guards/google-analitics.guard';

export const AppRoutes: Routes = [{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full',
}, {
   path: '',
   component: MainComponent,
   children: [
      {
         path: 'home',
         component: HomeComponent
      }, {
         path: 'seja-um-franqueado',
         component: ContactComponent,
         canActivate: [FacebookPixelGuard, GoogleAnalyticsGuard]
      }, {
         path: 'parcele-seu-boleto',
         component: FeaturesComponent
      }, {
         path: 'parceiro-comercial',
         component: AboutComponent
      }, {
         path: 'obrigado',
         component: ThankYouComponent
      }, {
         path: 'saiba-mais',
         component: SupportComponent
      },
      {
         path: '',
         loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
         path: '',
         loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
      }, {
         path: 'about/:keyword', component: AboutComponent
      }
   ]
}];

const config: ExtraOptions = {};

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forRoot(AppRoutes, config)
   ],
   exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
