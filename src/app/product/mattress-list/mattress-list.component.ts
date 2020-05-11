import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-mattress-list',
  templateUrl: './mattress-list.component.html',
  styleUrls: ['./mattress-list.component.less']
})

/**
 * @title         MattressList 
 * @description   Shows all the Mattress products stored in
 *                the database.
 *                If user has administrator priviledges, it
 *                is posible to delete and add elements.
 * @param         bedBaseList List of products retrieved from
 *                db.
 */
export class MattressListComponent implements OnInit {
  isAdmin: boolean = false;
  page = 1;
  pageSize = 5;

  constructor( private productService: ProductService,
               private userService: UserService,
               private router: Router,
               private fb: FormBuilder) { }

  mattressList: Product[] = [];

  imgUpload: File = null;

  /**
   * Form Control. Since img is a File, the control of
   * this element is done manually
   **/
   
  productForm = this.fb.group({
    id: ['', Validators.required],
    prize: ['', Validators.min(0.01)],
    img: [null],
    description: ['',Validators.required]
  });

  /* 
   * Gets the product list.
   * 
   * It also checks (if there is any token) if the 
   * token used has admin priviledges.
   */
  ngOnInit() {
    this.getList('Mattress');
    this.checkAdmin();
  }

  /*
   * Checks the response, and in case it is a product list,
   * the products are treated for show and added to the list.
   */
  getList(type:string){
    this.productService.listProduct(type).subscribe(
      (value) => {
        const response = value.body;
        if(Array.isArray(response)&&Array.length>0){
          for(let resP of response){
            const iProduct = {
              description: resP.description,
              id: resP.id,
              img: resP.img,
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

  /*
   * Deletes a product from the list and refreshes the content.
   * A DELETE request is sent for deletion form database.
   */
  deleteElement(id: string){
    this.productService.deleteProduct(id,'Mattress').subscribe(
      (ok) => {
        console.log(ok);
        this.router.navigateByUrl('/', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['colchones']);
        }); 
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  /**
   * Gets information from the form and sends it to the back for product creation.
   **/
  addElement(){
    const id = this.productForm.value.id;
    const prize = this.productForm.value.prize;
    const description = this.productForm.value.description;
    if(this.imgUpload !== undefined || this.imgUpload !== null && typeof(this.imgUpload)==='string'){
      const p = {
        id: id,
        prize: prize,
        description: description,
        img: this.imgUpload.toString()
      }
      console.log(p);
      this.productService.addProduct(p,'Mattress').subscribe(
        (val)=>{
          console.log(val);
        },
        (err)=>{
          console.log(err);
        });
    }
    else{
      console.log('Pic is missing');
    }
  }

  /**
   * Function calling to back, for retrieving info from the cookie. 
   * Logs error if an error happens sending or receiving info.
   **/
  checkAdmin(){
    this.userService.checkAdmin().subscribe(
      (val) => 
        {
          this.isAdmin=val.body.message;
          console.log(this.isAdmin);
        },
      (err) => {console.log(err);}
    );
  }

  /**
   * If there is a picture, convert it to base64 string and prepare it 
   * for database upload.
   **/
  async onFileChange(event: FileList) {
    if(event){
      const item: any = await this.readUploadedFileAsBase64(event.item(0));
      console.log(item);
      this.imgUpload=item.valueOf();
      console.log(this.imgUpload);
    }
  }

  /**
   * File reader. Reads the file to upload or aborts if there is no image
   * or the file has no valid format (png or jpeg).
   **/
  private readUploadedFileAsBase64 = (inputFile) => {
    const temporaryFileReader = new FileReader();
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
  };

}

