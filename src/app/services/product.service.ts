import { Injectable } from '@angular/core';
import { Product } from '../product/interfaces/product';
import { FeaturedProduct } from '../product/interfaces/featured.product';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, share } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

/**
 * @title         Product service
 * @description   Product information related service
 **/
export class ProductService {

  	constructor(
  		private http: HttpClient
  		) { }

  	private commonUrl = `${environment.apiUrl}/product`;

  	// In order to retrieve the cookie from the response, it is necessary to retrieve the 
  	// whole response instead of only the body.  
	httpOptions = {
	      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*', 
	        'Access-Control-Allow-Credentials': 'true', 'Access-Control-Expose-Headers':'true'}),
	      withCredentials: true,
	      observe: 'response' as 'response'
	};

	// Sends a delete request of a product with an existing type and id
	deleteProduct(id: string, type: string ): Observable<any> {
		const url = `${this.commonUrl}/${type}/${id}`;

  		return this.http.delete<any>(url, this.httpOptions).pipe(
    		tap(_ => console.log(`deleted ${type} id=${id}`)),
    		catchError(err => (of(`Error: ${err}`))),
    		share()
  		);
	}

	// Sends a product with a type and id for addition to database
	addProduct(product: Product, type: string): Observable<any> {
		const id = product.id;
		const url = `${this.commonUrl}/${type}/${id}`;

		return this.http.post<any>(url, product, this.httpOptions).pipe(
			tap(_ => console.log(`added ${type} id=${id}`)),
			catchError(err => (of(`Error: ${err}`))),
			share()
		);
	}

	// Sends information for editing an existing product in database
	editProduct(product: Product, type: string): Observable<any> {
		const id = product.id;
		const url = `${this.commonUrl}/${type}/${id}`;

		return this.http.put<any>(url, product, this.httpOptions).pipe(
			tap(_ => console.log(`edited ${type} id=${id}`)),
			catchError(err => (of(`Error: ${err}`))),
			share()
		);
	}

	// Retrieves a list of all the products with specified type
	listProduct(type: string): Observable<any> {
		const url = `${this.commonUrl}/${type}`;

		return this.http.get<any>(url, this.httpOptions).pipe(
			tap(_ =>console.log(`List of ${type}`)
		    ),
			catchError(err => (of(`Error: ${err}`)))
		);	
	}

	// Gets a product with specified type and id
	getProduct(type:string, id:string): Observable<any> {
		const url = `${this.commonUrl}/${type}/${id}`;
		return this.http.get<any>(url, this.httpOptions).pipe(
			tap(_ => console.log(`Element ${id} of ${type}`)),
			catchError(err => (of(`Error: ${err}`)))
		);	
	}

	// Gets a list of the most featured products. Filtering depends
	// on back server.
	featured(): Observable<any> {
		const url = `${environment.apiUrl}/dashboard`;

		return this.http.get<any>(url, this.httpOptions).pipe(
			tap(val => {console.log('Showing most featured'); console.log(val);}),
			catchError(err => (of(`Error: ${err}`)))
		);
	}

}
