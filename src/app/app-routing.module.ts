import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BedBaseComponent } from './product/bed-base/bed-base.component';
import { BedBaseListComponent } from './product/bed-base-list/bed-base-list.component';
import { MattressComponent } from './product/mattress/mattress.component';
import { MattressListComponent } from './product/mattress-list/mattress-list.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { PasswordComponent } from './user/password/password.component';
import { LoginComponent } from './user/login/login.component';

/**
* @title: 		Route List
* @dev: 		No guards are needed for now, since any user can
*      			access any page of the app.
*				
*				Retrieve component is not functional.			
*
* @description: Application routing module
*/
const routes: Routes = [
	{ path:'', component: DashboardComponent },
	{ path:'colchones', component: MattressListComponent },
	{ path:'colchones/:id', component: MattressComponent },
	{ path:'somieres', component: BedBaseListComponent },
	{ path:'somieres/:id', component: BedBaseComponent },
	{ path:'login', component: LoginComponent },
	{ path:'retrieve', component: PasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
