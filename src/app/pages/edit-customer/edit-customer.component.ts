import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  customerId: string;
  selectedCustomer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {
    this.customerId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    if (this.customerId) {
      this.customerService
        .getCustomerById(this.customerId)
        .subscribe((customer) => {
          this.selectedCustomer = customer;
        });
    }
  }
}
