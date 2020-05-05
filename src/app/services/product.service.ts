import { Injectable } from '@angular/core';
import { Product } from '../product/interfaces/product';
import { FeaturedProduct } from '../product/interfaces/featured.product';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  	constructor(
  		private http: HttpClient
  		) { }

  	private commonUrl = environment.apiUrl;

	httpOptions = {
  		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	deleteProduct(id: string, type: string ): Observable<any> {
		const url = `${this.commonUrl}/${type}/${id}`;

  		return this.http.delete<any>(url, this.httpOptions).pipe(
    		tap(_ => console.log(`deleted ${type} id=${id}`)),
    		catchError(err => (of(`Error: ${err}`)))
  		);
	}

	addProduct(product: Product, type: string): Observable<any> {
		const id = product.id;
		const url = `${this.commonUrl}/${type}/${id}`;

		return this.http.post<any>(url, product, this.httpOptions).pipe(
			tap(_ => console.log(`added ${type} id=${id}`)),
			catchError(err => (of(`Error: ${err}`)))
		);
	}

	editProduct(product: Product, type: string): Observable<any> {
		const id = product.id;
		const url = `${this.commonUrl}/${type}/${id}`;

		return this.http.put<any>(url, product, this.httpOptions).pipe(
			tap(_ => console.log(`edited ${type} id=${id}`)),
			catchError(err => (of(`Error: ${err}`)))
		);
	}

	listProduct(type: string): Observable<any> {
		const url = `${this.commonUrl}/${type}`;

		return this.http.get<any>(url, this.httpOptions).pipe(
			tap(_ => console.log(`List of ${type}`)),
			catchError(err => (of(`Error: ${err}`)))
		);	
	}

	featured(): Observable<any> {
		const url = this.commonUrl;

		return this.http.get<any>(url, this.httpOptions).pipe(
			tap(_ => console.log('Showing most featured')),
			catchError(err => (of(`Error: ${err}`)))
		);
	}

}
