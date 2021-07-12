import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  public getCustomerById(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${customerId}`);
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer);
  }

  public updateCustomer(
    customer: Partial<Customer>
  ): Observable<Partial<Customer>> {
    const customerId = customer.id;
    delete customer.id;
    return this.http.patch<Customer>(`${this.url}/${customerId}`, customer);
  }

  public deleteCustomer(customerId: string): Observable<Customer> {
    return this.http.delete<Customer>(`${this.url}/${customerId}`);
  }
}
