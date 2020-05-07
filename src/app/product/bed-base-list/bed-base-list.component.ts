import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-bed-base-list',
  templateUrl: './bed-base-list.component.html',
  styleUrls: ['./bed-base-list.component.less']
})

/**
 *@title: 		BedBaseList 
 *@dev: 		Delete demo and call the service.
 *				Pagination
 */
export class BedBaseListComponent implements OnInit {
  constructor( private productService: ProductService ) { }

  bedBaseList: Product[] = [];

  constructor() { }

  ngOnInit() {
  	//TODO: Call the Service
    this.getList('Mattress');
  	const bedBaseExample: Product = 
  	{
  		id:'1234151SOM',
  		prize: 69.95,
  		url: 'app/product/bed-base-list/images.jpg',
  		description: 'Un somier sencillo y barato'
  	};
  	this.bedBaseList.push(bedBaseExample);
  }

  getList(type:string){
    this.productService.listProduct(type).subscribe(
      (value) => {
        console.log(value);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
