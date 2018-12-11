import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';
import { of } from 'rxjs';

export interface BreadCrumb {
  label: string;
  url: string;
}

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

  breadcrumbs$;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.breadcrumbs$ = this.router.events.pipe(
      startWith(new NavigationEnd(0, '/', '/')),
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map((event =>  this.buildBreadCrumb(this.route)))
    );
  }

  ngOnInit() {
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const label = (route.routeConfig && route.routeConfig.data) ? route.routeConfig.data[ 'breadcrumb' ] : 'Admin';
    const path = route.routeConfig ? route.routeConfig.path : '';
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {label: label, url: nextUrl};
    const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
