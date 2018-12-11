import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EditableLabelComponent } from './editable-label.component';
import { ValueDisplayPipe } from './value-display.pipe';

@NgModule({
  declarations: [
    EditableLabelComponent,
    ValueDisplayPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    EditableLabelComponent
  ]
})
export class EditableLabelModule { }
