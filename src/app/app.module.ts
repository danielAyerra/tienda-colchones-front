import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { BedBaseComponent } from './product/bed-base/bed-base.component';
import { MattressComponent } from './product/mattress/mattress.component';
import { BedBaseListComponent } from './product/bed-base-list/bed-base-list.component';
import { MattressListComponent } from './product/mattress-list/mattress-list.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { PasswordComponent } from './user/password/password.component';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BedBaseComponent,
    MattressComponent,
    BedBaseListComponent,
    MattressListComponent,
    DashboardComponent,
    PasswordComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
