import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contactus/contacts.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { TelevisionDetailsComponent } from './television-details/television-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule} from '@angular/common/http';
// import { UserComponent } from './user/user.component';
// import { UserdetailsComponent } from './userdetails/userdetails.component';
import { TestComponent } from './test/test.component';
import { BagsComponent } from './bags/bags.component';
import { BottlesComponent } from './bottles/bottles.component';
import { PensComponent } from './pens/pens.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactsComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionsComponent,
    MobileDetailsComponent,
    BikeDetailsComponent,
    TelevisionDetailsComponent,
    PagenotfoundComponent,
    // UserComponent,
    // UserdetailsComponent,
    TestComponent,
    BagsComponent,
    BottlesComponent,
    PensComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
