import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICustomer } from '../model/customermodel';
import { tap, catchError, map } from 'rxjs/operators';

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

  public createProduct(product: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<ICustomer>('http://localhost:3000/users', product, {headers})
    .pipe(tap (data => console.log('Create product is successful' + JSON.stringify(data))), catchError(this.handleError));
  }

  deleteTopic(topicID: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/users/${topicID}`;
    console.log('url = ' + url);
    return this._http.delete<ICustomer>(url, { headers })
    .pipe(
      tap(data => console.log('deleteTopic: ' + topicID)),
      catchError(this.handleError)
    );
  }

  public updateTopic(topicID: number): Observable<ICustomer> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:3000/users/${topicID}`;
    return this._http.put<ICustomer>(url, {headers})
    .pipe(
      tap(data => console.log('updateTopic: ' + topicID)),
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
