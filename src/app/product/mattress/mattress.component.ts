import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mattress',
  templateUrl: './mattress.component.html',
  styleUrls: ['./mattress.component.less']
})
export class MattressComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
  	const type = "Mattress";
  	const id = this.route.snapshot.paramMap.get('id');
  	this.getProduct(type, id);
  }

  getProduct(type: string, id: string){
  	this.productService.getProduct(type, id).subscribe(
  		(value) => {
  			console.log(value);
  		},
  		(err) => {
  			console.log(err);
  		}
	);
  }
}
