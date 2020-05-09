import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mattress',
  templateUrl: './mattress.component.html',
  styleUrls: ['./mattress.component.less']
})
export class MattressComponent implements OnInit {

  constructor(private productService: ProductService, 
    private route: ActivatedRoute,
    private router: Router) { }

  mattress: Product;

  ngOnInit() {
  	const type = "Mattress";
  	const id = this.route.snapshot.paramMap.get('id');
  	this.getProduct(type, id);
  }

  getProduct(type: string, id: string){
  	this.productService.getProduct(type, id).subscribe(
  		(value) => {
        this.mattress = {
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

  deleteProduct(){
    this.productService.deleteProduct(this.mattress.id, 'Mattress').subscribe(
      (ok) => {
        console.log(ok);
        this.router.navigate(['colchones']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
