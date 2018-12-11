import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
