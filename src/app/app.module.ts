import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BedBaseComponent } from './product/bed-base/bed-base.component';
import { MattressComponent } from './product/mattress/mattress.component';
import { BedBaseListComponent } from './product/bed-base-list/bed-base-list.component';
import { MattressListComponent } from './product/mattress-list/mattress-list.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { PasswordComponent } from './user/password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    BedBaseComponent,
    MattressComponent,
    BedBaseListComponent,
    MattressListComponent,
    DashboardComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
