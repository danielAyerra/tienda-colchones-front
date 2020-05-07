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
    const mattressExample: FeaturedProduct = 
    {
      id:'1234151COL',
      prize: 100.95,
      url: 'app/product/matress-list/images.jpg',
      description: 'Un colchón rompe espaldas',
      type:'Mattress'
    };
    const bedBaseExample: FeaturedProduct = 
    { 
      id: '62226y5246SOM',
      type: 'BedBase',
      prize: 927.54,
      url: "someURL/base64IMG",
      description: 'Un lujo de Somier'
    }
    this.prodList.push(mattressExample);
    this.prodList.push(bedBaseExample);
  }

  getFeatured(){
  	this.productService.featured().subscribe(
  		(value) => {
  			console.log(value);
  		},
  		(err) => {
  			console.log(err);
  		}
	);
  }

}
