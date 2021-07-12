import { Observable } from 'rxjs';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  customers$: Observable<Customer[]> = new Observable();

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers$ = this.customerService.getAllCustomers();
  }

  editCustomer(customer: Customer) {
    alert(JSON.stringify(customer));
  }

  deleteCustomer(customer: Customer) {
    alert(JSON.stringify(customer));
  }
}
