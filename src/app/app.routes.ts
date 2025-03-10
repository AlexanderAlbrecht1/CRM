import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewCustomersOverviewComponent } from './new-customers-overview/new-customers-overview.component';
import { ExistingCustomersOverviewComponent } from './existing-customers-overview/existing-customers-overview.component';
import { VipCustomersOverviewComponent } from './vip-customers-overview/vip-customers-overview.component';
import { OfferOverviewComponent } from './offer-overview/offer-overview.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'newCustomersOverview', component: NewCustomersOverviewComponent},
  {path: 'existingCustomersOverview', component: ExistingCustomersOverviewComponent},
  {path: 'vipCustomersOverview', component: VipCustomersOverviewComponent},
  {path: 'offerOverview', component: OfferOverviewComponent},
  {path: 'user/:id', component: UserDetailComponent}
];
