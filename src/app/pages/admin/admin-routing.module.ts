import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';

export const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'home', component: DummyPageComponent, data: {breadcrumb: 'Home'}},
      {path: 'groups', component: GroupsPageComponent, data: {breadcrumb: 'Groups - Name'}}, // use resolver with real integration
      {path: 'users', component: DummyPageComponent, data: {breadcrumb: 'Users'}},
      {path: 'plans', component: DummyPageComponent, data: {breadcrumb: 'Plans'}},
      {path: 'orders', component: DummyPageComponent, data: {breadcrumb: 'Orders'}},
      {path: 'quantity-discounts', component: DummyPageComponent, data: {breadcrumb: 'Quantity Discounts'}},
      {path: 'coupons', component: DummyPageComponent, data: {breadcrumb: 'Coupons'}},
      {path: 'search-sites', component: DummyPageComponent, data: {breadcrumb: 'Search Sites'}},
      {path: 'site-groups', component: DummyPageComponent, data: {breadcrumb: 'Site Groups'}},
      {path: 'been-verified', component: DummyPageComponent, data: {breadcrumb: 'Been Verified'}},
      {path: 'mail-template', component: DummyPageComponent, data: {breadcrumb: 'Mail Templates'}},
      {path: '**', redirectTo: 'groups'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
