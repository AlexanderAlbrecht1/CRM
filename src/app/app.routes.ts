import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewCustomersOverviewComponent } from './new-customers-overview/new-customers-overview.component';
import { ExistingCustomersOverviewComponent } from './existing-customers-overview/existing-customers-overview.component';
import { VipCustomersOverviewComponent } from './vip-customers-overview/vip-customers-overview.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { SimpleOPLComponent } from './simple-opl/simple-opl.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'newCustomersOverview', component: NewCustomersOverviewComponent},
  {path: 'existingCustomersOverview', component: ExistingCustomersOverviewComponent},
  {path: 'vipCustomersOverview', component: VipCustomersOverviewComponent},
  {path: 'OPL', component: SimpleOPLComponent},
  {path: 'customer/:id', component: CustomerDetailComponent},
  {path: 'imprint', component: ImprintComponent}
];
