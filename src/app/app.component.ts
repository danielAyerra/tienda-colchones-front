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
 *@description 		  Main component of the app. Displays the navigation
 *					        bar and the different routed components
 *
 *
 *					
 */

export class AppComponent {
  constructor(
  	private router:Router
    ){}
  title: string = 'Weinman';
  cookieExist: boolean=false;

  //Deletes the cookie with the token and navigates to main page
  logOut(): void {
    Cookie.remove('Authorization');
    this.router.navigateByUrl('/', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/']);
        }); 
  }

  // Whenever the router outlet changes its content, checks if a user is logged
  onRouterOutletActivate(): void {
  	if(Cookie.get('Authorization')!=undefined){
  		console.log(Cookie.get('Authorization'));
  		this.cookieExist=true;
  	}
  }
}
