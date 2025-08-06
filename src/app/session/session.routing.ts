import { Routes } from '@angular/router';

import { ThankYouComponent } from '../thankYou/thankYou.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { QualifiedComponent } from '../qualified/qualified.component';

export const SessionRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},{
  path: '',
  children: [
  {
    path: 'qualified',
    component: QualifiedComponent
  },    
  {
    path: 'obrigado',
    component: ThankYouComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }]
}];