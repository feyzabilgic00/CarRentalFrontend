import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../modules/car';
import { CarDetails } from '../modules/carDetails';
import { ListResponseModel } from '../modules/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:44391/api/';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(id:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getbybrand?id="+id;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getbycolor?id="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarsDetails(carId: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getcardetails?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

}
