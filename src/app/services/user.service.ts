import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  login (user: string, pass: string) Observable<boolean> {
  	return this.http.post<boolean>(url, this.httpOptions).pipe(
			tap(message => this.log(`Login done: ${message}`)),
			catchError(err => (of(`Error: ${err}`)))
		);
  }

  checkAdmin (user: string) Observable<boolean> {
  	return this.http.post<boolean>(url, this.httpOptions).pipe(
			tap(message => this.log(`Login done: ${message}`)),
			catchError(err => (of(`Error: ${err}`)))
		);
  }

  changePass (pass: string, newPass: string) Observable<void> {
  	return this.http.put<void>(url, this.httpOptions).pipe(
  			tap(_ => this.log(`Succesfully changed password`)),
  			catchError(err => (of(`Error: ${err}`)))
		);
  }

}
