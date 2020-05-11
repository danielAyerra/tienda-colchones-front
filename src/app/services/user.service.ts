import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * @title         User service
 * @description   User information related service
 **/
export class UserService {

  constructor(
    private http: HttpClient
    ) { }

  private commonUrl = `${environment.apiUrl}/user`;

  // In order to retrieve the cookie from the response, it is necessary to retrieve the 
  // whole response instead of only the body.
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*', 
        'Access-Control-Allow-Credentials': 'true', 'Access-Control-Expose-Headers':'true'}),
      withCredentials: true,
      observe: 'response' as 'response'
  };

  // If the information is correct, returns the JWT token in a cookie
  login (user: string, pass: string): Observable<any> {
    const url = `${this.commonUrl}/login`;
    const userInfo = {user: user, pass: pass};
  	return this.http.post<any>(url, userInfo, this.httpOptions).pipe(
			tap(message => console.log("Login done:")),
			catchError(err => (of(`Error: ${err}`)))
		);
  }

  // Requests if a cookie has "isAdmin" feature
  checkAdmin (): Observable<any> {
    const url = `${this.commonUrl}/checkAdmin`;
  	return this.http.get<any>(url, this.httpOptions).pipe(
			tap(message => console.log(message)),
			catchError(err => (of(`Error: ${err}`)))
		);
  }

}
