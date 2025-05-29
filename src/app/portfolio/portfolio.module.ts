import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortfolioRoutes } from './portfolio.routing';
import { WidgetsModule } from '../widgets/widgets.module';

import { PortfolioGridV1Component } from './portfolioGridV1/portfolioGridV1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PortfolioRoutes),
    WidgetsModule
  ],
  declarations: [ 
  	PortfolioGridV1Component 
  ]
})
export class PortfolioModule { }
