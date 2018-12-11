import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';

import { EditableLabelModule } from '../../shared/editable-label/editable-label.module';

import { AdminComponent } from './admin.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';

@NgModule({
  declarations: [
    AdminComponent,
    DummyPageComponent,
    GroupsPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AdminRoutingModule,
    EditableLabelModule
  ]
})
export class AdminModule { }
