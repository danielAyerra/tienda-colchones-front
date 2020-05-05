import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient
    ) { }

  private baseUrl = environment.apiUrl;

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login (user: string, pass: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
  	return this.http.post<any>(url, this.httpOptions).pipe(
			tap(message => console.log(`Login done: ${message}`)),
			catchError(err => (of(`Error: ${err}`)))
		);
  }

  checkAdmin (user: string): Observable<any> {
    const url = `${this.baseUrl}/checkAdmin`;
  	return this.http.post<any>(url, this.httpOptions).pipe(
			tap(message => console.log(`User exist: ${message}`)),
			catchError(err => (of(`Error: ${err}`)))
		);
  }

  changePass (pass: string, newPass: string): Observable<any> {
    const url = `${this.baseUrl}/pass`;
  	return this.http.put<any>(url, this.httpOptions).pipe(
  			tap(_ => console.log(`Succesfully changed password`)),
  			catchError(err => (of(`Error: ${err}`)))
		);
  }

}
