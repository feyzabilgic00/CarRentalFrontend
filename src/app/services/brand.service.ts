import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../modules/brand';
import { ListResponseModel } from '../modules/listResponseModel';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44391/api/brands/getall';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
