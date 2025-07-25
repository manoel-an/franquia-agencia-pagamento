import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SessionRoutes } from './session.routing';
import { WidgetsModule } from '../widgets/widgets.module';

import { ThankYouComponent } from '../thankYou/thankYou.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NotFoundComponent } from './notFound/notFound.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    WidgetsModule
  ],
  declarations: [
	  ThankYouComponent,
	  MaintenanceComponent,
	  NotFoundComponent,
  ]
})
export class SessionModule { }
