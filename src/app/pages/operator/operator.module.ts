import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorRoutingModule } from './operator-routing.module';
import { OperatorComponent } from './operator.component';

@NgModule({
  declarations: [OperatorComponent],
  imports: [
    CommonModule,
    OperatorRoutingModule
  ]
})
export class OperatorModule { }
