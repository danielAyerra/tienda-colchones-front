import { Component, OnInit } from '@angular/core';
import { FeaturedProduct } from '../../product/interfaces/featured.product'
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor( private productService: ProductService ) { }

  prodList: FeaturedProduct[]=[];

  ngOnInit() {
  	this.getFeatured();
  }

  getFeatured(){
  	/*console.log(this.productService);
  	this.productService.featured().subscribe(
  		(value) => {
  			console.log(value);
  		},
  		(err) => {
  			console.log(err);
  		}
	);*/
    const bedBaseExample: FeaturedProduct = 
    {
      id:'1234151SOM',
      prize: 69.95,
      url: 'app/product/bed-base-list/images.jpg',
      description: 'Un somier sencillo y barato',
      type: 'BedBase'
    };

    const mattressExample: FeaturedProduct = 
    {
      id:'1234151COL',
      prize: 69.95,
      url: 'app/product/bed-base-list/images.jpg',
      description: 'Un colchón sencillo y barato',
      type: 'Mattress'
    };
    this.prodList.push(bedBaseExample);
    this.prodList.push(mattressExample);
    console.log(this.prodList);
  }

}
