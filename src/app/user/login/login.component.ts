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
