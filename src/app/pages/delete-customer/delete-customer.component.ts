import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss'],
})
export class DeleteCustomerComponent implements OnInit {
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
