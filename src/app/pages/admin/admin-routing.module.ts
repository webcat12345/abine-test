import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';

export const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'home', component: DummyPageComponent, data: {label: 'Home'}},
      {path: 'groups', component: GroupsPageComponent, data: {label: 'Groups'}},
      {path: 'users', component: DummyPageComponent, data: {label: 'Users'}},
      {path: 'plans', component: DummyPageComponent, data: {label: 'Plans'}},
      {path: 'orders', component: DummyPageComponent, data: {label: 'Orders'}},
      {path: 'quantity-discounts', component: DummyPageComponent, data: {label: 'Quantity Discounts'}},
      {path: 'coupons', component: DummyPageComponent, data: {label: 'Coupons'}},
      {path: 'search-sites', component: DummyPageComponent, data: {label: 'Search Sites'}},
      {path: 'site-groups', component: DummyPageComponent, data: {label: 'Site Groups'}},
      {path: 'been-verified', component: DummyPageComponent, data: {label: 'Been Verified'}},
      {path: 'mail-template', component: DummyPageComponent, data: {label: 'Mail Templates'}},
      {path: '**', redirectTo: 'groups'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
