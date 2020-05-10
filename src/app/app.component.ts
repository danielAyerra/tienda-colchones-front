import { Component } from '@angular/core';
import * as Cookie from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
/*
 *@title            Root component
 *@description 		Main component of the app. Displays the navigation
 *					bar and the different routed components
 *
 *@dev 				LoggedIn boolean will be deprecated by the use of 
 *					JWT token
 *
 *					isAdmin boolean is passed to the children in order
 *					to establish if admin priviledges are allowed or not
 */

export class AppComponent {
  constructor(
  	private router:Router
    ){}
  title: string = 'Weinman';
  cookieExist: boolean=false;

  logOut(): void {
    Cookie.remove('Authorization');
    this.router.navigateByUrl('/', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/']);
        }); 
  }

  onRouterOutletActivate(): void {
  	if(Cookie.get('Authorization')!=undefined){
  		console.log(Cookie.get('Authorization'));
  		this.cookieExist=true;
  	}
  }
}
