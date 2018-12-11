import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BillingInfo, Company } from '../../../core/interface/company';
import { SelectOption } from '../../../core/interface/common';

@Component({
  selector: 'abine-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss']
})
export class GroupsPageComponent implements OnInit {

  companyInfo: Company = {
    id: '52179',
    manager: 'Joe Sutton - joe@getabine.com', // manager input form with email and name separately?
    name: 'Epic. Inc - Fortnite',
    createdAt: new Date().toISOString(), // date ISO string is standard
    stripeCustomer: 'stripe - cus_xxxxxxxx',
    billing: BillingInfo.Invoiced,
    comments: []
  };

  billingOptions: SelectOption[] = [
    {label: 'Invoiced', value: BillingInfo.Invoiced},
    {label: 'Instant', value: BillingInfo.Instant},
  ];

  commentForm: FormGroup = this.fb.group({
    comment: ['', Validators.required]
  });

  addComment = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  saveComment() {
    this.companyInfo.comments.push(this.commentForm.value.comment);
    this.commentForm.reset();
  }

}
