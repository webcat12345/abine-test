import { Component, OnInit } from '@angular/core';
import { DummyPageComponent } from './dummy-page/dummy-page.component';

@Component({
  selector: 'abine-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  navigations = [
    {path: 'home', label: 'Home'},
    {path: 'groups', label: 'Groups'},
    {path: 'users', label: 'Users'},
    {path: 'plans', label: 'Plans'},
    {path: 'orders', label: 'Orders'},
    {path: 'quantity-discounts', label: 'Quantity Discounts'},
    {path: 'coupons', label: 'Coupons'},
    {path: 'search-sites', label: 'Search Sites'},
    {path: 'site-groups', label: 'Site Groups'},
    {path: 'been-verified', label: 'Been Verified'},
    {path: 'mail-template', label: 'Mail Templates'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
