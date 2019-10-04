import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import {ICustomer} from '../model/customermodel';
import { tap, catchError, map } from 'rxjs/operators';
import { ILoginData } from '../model/loginmodel';
import { IMail } from '../model/mailmodel';
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

  getCustomerDataById(customer: ICustomer): Observable<ICustomer[]> {
    return this._httpclient.get<ICustomer[]>(
      `http://localhost:3000/users/${customer.topicID}`
    );
  }

  getLoginDataByMail(login: string): Observable<ILoginData> {
    console.log(login);
    return this._httpclient.get<ILoginData>(
      `http://localhost:3000/logins/${login}`
    );
  }

  // public createProduct(product: ICustomer): Observable<ICustomer> {
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   return this._http.post<ICustomer>('http://localhost:3000/users', product, {headers})
  //   .pipe(tap (data => console.log('Create product is successful' + JSON.stringify(data))), catchError(this.handleError));
  // }

  deleteTopic(topicID: number): Observable<{}> {
    console.log(topicID);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/users/${topicID}`;
    console.log('url = ' + url);
    return this._httpclient.delete<ICustomer>(url, { headers })
    .pipe(
      tap(data => console.log('deleteTopic: ' + topicID)),
      catchError(this.handleError)
    );
  }

  // public updateTopic(topicID: number): Observable<ICustomer> {
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   const url = `http://localhost:3000/users/${topicID}`;
  //   return this._http.put<ICustomer>(url, {headers})
  //   .pipe(
  //     tap(data => console.log('updateTopic: ' + topicID)),
  //     catchError(this.handleError)
  //   );
  // }

  postLoginDataByMail(login: ILoginData): Observable<ILoginData> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // MIME TYPE
    return this._httpclient.post<ILoginData>(`http://localhost:3000/logins`, login, {headers})
    .pipe(tap (data => console.log('Create Product is Successful' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  updateCustomerData(id: number, customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(customer);
    console.log(id);
    // const url =
    return this._httpclient.put<ICustomer>(`http://localhost:3000/users/${id}`, customer, { headers })
    .pipe(
    tap(() => console.log('updateProduct: ' + customer.topicID)),
    // Return the product on an update
    map(() => customer),
    catchError(this.handleError)
    );

  }

  public createProduct(customer: ICustomer): Observable<ICustomer> {

    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // MIME TYPE
    return this._httpclient.post<ICustomer>(`http://localhost:3000/users`, customer, {headers})
    .pipe(tap (data => console.log('Create Product is Successful' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  public sendMail(mail: IMail): Observable<IMail> {

    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // MIME TYPE
    return this._httpclient.post<IMail>(`http://localhost:3000/users/sendmail`, mail, {headers})
    .pipe(tap (data => console.log('Create Product is Successful' + JSON.stringify(data))),
    catchError(this.handleError));
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
