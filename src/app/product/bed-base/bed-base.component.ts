import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bed-base',
  templateUrl: './bed-base.component.html',
  styleUrls: ['./bed-base.component.less']
})

/**
 *@title Bed base
 *@dev Receives the id and shows the information of this ID
 *@description Shows the information of a BedBase Element
 */
export class BedBaseComponent implements OnInit {

  bedBase: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
  	const type = "BedBase";
  	const id = this.route.snapshot.paramMap.get('id');
  	this.getProduct(type, id);
  }

  getProduct(type: string, id: string){
  	this.productService.getProduct(type, id).subscribe(
  		(value) => {
  			 this.bedBase = {
          id: value.body.id,
          prize: value.body.prize,
          img: value.body.img,
          description: value.body.description
        }
  		},
  		(err) => {
  			console.log(err);
  		}
	);
  }

}
