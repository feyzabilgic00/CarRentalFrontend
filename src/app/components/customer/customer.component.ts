import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/modules/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.customerService.getCustomerDetails().subscribe(response=>{
      this.customers=response.data;
    });
  }
}
