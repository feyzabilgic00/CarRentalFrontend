import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../modules/customer';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44391/api/customers/getcustomerdetails';
  constructor(private httpClient: HttpClient) {}

  getCustomerDetails():Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);      
   }
}
