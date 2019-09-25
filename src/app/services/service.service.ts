import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import {ICustomer} from '../model/customermodel';
import { tap, catchError, map } from 'rxjs/operators';
// import { IHouseModel } from '../model/houseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }

  getCustomerData(): Observable<ICustomer[]> {
    return this._httpclient.get<ICustomer[]>(
      `http://localhost:3000/users`
    );
  }

  updateCustomerData(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/users/${customer.topicID}`;
    return this._httpclient.put<ICustomer>(url, customer, { headers })
    .pipe(
    tap(() => console.log('updateProduct: ' + customer.topicID)),
    // Return the product on an update
    map(() => customer),
    catchError(this.handleError)
    );

  }


  private handleError(err: ErrorEvent) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Backend returned code ${err.error.status}: ${err.error.body}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
