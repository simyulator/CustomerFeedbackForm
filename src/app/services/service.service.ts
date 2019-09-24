import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../model/customermodel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  public getCustomerData(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>('http://localhost:3000/users');
  }
  public getProduct(id: number): Observable<ICustomer> {
    return this._http.get<ICustomer>('http://localhost:3000/users');
  }
}
