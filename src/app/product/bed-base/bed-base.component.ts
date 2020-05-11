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
 * @title            Bed base
 * @description      Shows the information of a BedBase Element.
 *                   In case the user has administrator priviledges,
 *                   it is also posible to edit and delete the product.
 *
 * @param isAdmin    Result of checking the token parameter "isAdmin" at the back
 * @param bedBase    Element for show.
 */
export class BedBaseComponent implements OnInit {
  isAdmin: boolean=false;
  bedBase: Product;

  constructor(private productService: ProductService, 
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService) { }

  /**
   * Gets the product id from URL and requests for
   * product information.
   * 
   * It also checks (if there is any token) if the 
   * token used has admin priviledges
   **/
  ngOnInit() {
  	const type = "BedBase";
  	const id = this.route.snapshot.paramMap.get('id');
  	this.getProduct(type, id);
    this.checkAdmin();
  }

  /**
   * Function calling for database object. Logs error if an error
   * happens sending or receiving info.
   **/
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

  /**
   * Function calling to back, for retrieving info from the cookie. 
   * Logs error if an error happens sending or receiving info.
   **/
  checkAdmin(){
    this.userService.checkAdmin().subscribe(
      (val) => 
        {this.isAdmin=val.body.message;
          console.log(this.isAdmin);
        },
      (err) => {console.log(err);}
    );
  }

  /**
   * Sends data of the new product content. It is not posible to change
   * the id or the picture within the product.
   * Logs error if an error happens sending or receiving info.
   */
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

  /**
   * Sends a request for product deletion and navigates to @type list URL.
   * Logs error if an error happens sending or receiving info.
   **/
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
