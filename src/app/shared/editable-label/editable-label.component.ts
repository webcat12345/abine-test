import { Component, Input, OnInit } from '@angular/core';
import { SelectOption } from '../../core/interface/common';

@Component({
  selector: 'abine-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.scss']
})
export class EditableLabelComponent implements OnInit {

  @Input() value: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;

  @Input() options: SelectOption[];

  isEdit = false;

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.isEdit = false;
  }

}
