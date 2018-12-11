export interface Company {
  id: string;
  manager: string;
  name: string;
  createdAt: string;
  stripeCustomer: string;
  billing: BillingInfo;
  comments: string[];
}

export enum BillingInfo {
  Invoiced = 100,
  Instant = 200
}
