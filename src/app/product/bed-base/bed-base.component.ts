import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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
  isAdmin: boolean=false;
  bedBase: Product;

  constructor(private productService: ProductService, 
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  	const type = "BedBase";
  	const id = this.route.snapshot.paramMap.get('id');
  	this.getProduct(type, id);
    this.checkAdmin();
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

  checkAdmin(){
    this.userService.checkAdmin().subscribe(
      (val) => 
        {this.isAdmin=val.body.message;
          console.log(this.isAdmin);
        },
      (err) => {console.log(err);}
    );
  }

  editProduct(){
    this.productService.editProduct(this.bedBase, 'BedBase').subscribe(
      (val)=>{
        console.log(val);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  deleteProduct(){
    this.productService.deleteProduct(this.bedBase.id, 'BedBase').subscribe(
      (ok) => {
        console.log(ok);
        this.router.navigate(['somieres']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
