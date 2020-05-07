import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-mattress-list',
  templateUrl: './mattress-list.component.html',
  styleUrls: ['./mattress-list.component.less']
})

/**
 *@title: 		MatressList 
 *@dev: 		Delete demo and call the service.
 *				  Pagination
 */
export class MattressListComponent implements OnInit {
  mattressList: Product[] = [];

  constructor(productService: ProductService) { }

  ngOnInit() {
  	//TODO: Call the Service
    this.getList('BedBase');
  	const mattressExample: Product = 
  	{
  		id:'1234151COL',
  		prize: 100.95,
  		url: 'app/product/matress-list/images.jpg',
  		description: 'Un colchón rompe espaldas'
  	};
  	this.mattressList.push(mattressExample);
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

