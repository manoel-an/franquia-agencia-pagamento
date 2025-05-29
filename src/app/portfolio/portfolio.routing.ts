import { Routes } from '@angular/router';

import { PortfolioGridV1Component } from './portfolioGridV1/portfolioGridV1.component';


export const PortfolioRoutes: Routes = [{
  path: '',
  redirectTo: 'portfolio-v1',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'casos-sucesso',
    component: PortfolioGridV1Component
  }]
}];
