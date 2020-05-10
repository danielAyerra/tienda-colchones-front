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
  	this.productService.featured().subscribe(
  		(value) => {
  			this.prodList=value.body;
  		},
  		(err) => {
  			console.log(err);
  		}
	);
  }

}
