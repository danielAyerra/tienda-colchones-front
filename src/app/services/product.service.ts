import { Injectable } from '@angular/core';
import { Product } from '../product/interfaces/product';
import { FeaturedProduct } from '../product/interfaces/featured.product';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  	constructor() { }

  	private commonUrl = this.environment.apiUrl;

	httpOptions = {
  		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	deleteProduct(id: string, type: string ): Observable<void> {
		const url = `${this.commonUrl}/${type}/${id}`;

  		return this.http.delete<Product>(url, this.httpOptions).pipe(
    		tap(_ => this.log(`deleted ${type} id=${id}`)),
    		catchError(err => (of(`Error: ${err}`)))
  		);
	}

	addProduct(product: Product, type: string): Observable<Product> {
		const id = product.id;
		const url = `${this.commonUrl}/${type}/${id}`;

		return this.http.post<Product>(url, product, this.httpOptions).pipe(
			tap(_ => this.log(`added ${type} id=${id}`)),
			catchError(err => (of(`Error: ${err}`)))
		);
	}

	editProduct(product: Product, type: string): Observable<Product> {
		const id = product.id;
		const type = product.type;
		const url = `${this.commonUrl}/${type}/${id}`;

		return this.http.put<Product>(url, product, this.httpOptions).pipe(
			tap(_ => this.log(`edited ${type} id=${id}`)),
			catchError(err => (of(`Error: ${err}`)))
		);
	}

	listProduct(type: string): Observable<Product[]> {
		const url = `${this.commonUrl}/${type}`;

		return this.http.get<Product[]>(url, this.httpOptions).pipe(
			tap(_ => this.log(`List of ${type}`)),
			catchError(err => (of(`Error: ${err}`)))
		);	
	}

	featured(): Observable<any> {

	}

}
