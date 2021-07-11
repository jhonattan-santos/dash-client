import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = '/api/customers'

  constructor(private http: HttpClient) {

   }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }
}
