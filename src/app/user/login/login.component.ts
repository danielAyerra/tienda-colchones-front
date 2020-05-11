import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

/**
 * @title            Login
 * @description      Logs in a user. If successful, navigates to main page
 *                   and a token is received in a cookie.
 *
 * @dev              If not a valid log in, it should show an error message.
 */
export class LoginComponent implements OnInit {

	userForm = this.fb.group({
    	user: ['', Validators.required],
    	pass: ['', Validators.required]
  	});

  constructor(
  	private userService: UserService,
  	private fb: FormBuilder,
    private router: Router
  	) { }

  ngOnInit() {
  }

  // If the form is fulfilled, retrieves the data and sends it.
  // If the response is ok, navigates to main page.
  login(){
  	const user = this.userForm.value.user;
  	const pass = this.userForm.value.pass;
  	this.userService.login(user, pass).subscribe(
  		(ans)=>{
  			if(ans.body && ans.body.res===true){
  				console.log('log ok');
          this.router.navigate(['']);
  			}
  			else{
  				console.log('log wrong');
  			}
  		},
  		(err)=>{
  			console.log('error received');
  		}
	);
  }

}
