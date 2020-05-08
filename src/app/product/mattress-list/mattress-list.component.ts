import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Route } from '@angular/router';


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

  constructor(private productService: ProductService) { }

  ngOnInit() {
  	//TODO: Call the Service
    this.getList('Mattress');
  }

  getList(type:string){
    this.productService.listProduct(type).subscribe(
      (value) => {
        const response = value.body;
        if(Array.isArray(response)&&Array.length>0){
          for(let resP of response){
            const iProduct: Product = {
              description: resP.description.toString(),
              id: resP.id.toString(),
              img: resP.img.toString(),
              prize: +resP.prize,
            }
            this.mattressList.push(iProduct);
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteElement(id: string){
    this.productService.deleteProduct('Mattress', id).subscribe(
      (ok) => {
        console.log(ok);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  viewProduct(type:string, id:string){

  }

}

