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

  ngOnInit() {
  	//TODO: Call the Service
    this.getList('BedBase');
  }

  getList(type:string) {
    this.productService.listProduct(type).subscribe(
      (value) => {
        const response = value.body;
        if(Array.isArray(response)&&Array.length>0){
          for(let resP of response){
            const iProduct = {
              description: resP.description,
              id: resP.id,
              img: resP.img,
              prize: resP.prize,
            }
            this.bedBaseList.push(iProduct);
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteElement(){

  }
}
