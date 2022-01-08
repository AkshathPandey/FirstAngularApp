import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactsComponent } from './contactus/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { BagsComponent } from './bags/bags.component';
import { BottlesComponent } from './bottles/bottles.component';
import { PensComponent } from './pens/pens.component';
// import { UserComponent } from './user/user.component';
// import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactsComponent},
  {path:'products',component:ProductsComponent,children:
  [
    {path:'Pens',component:PensComponent},
   {path:'Bags',component:BagsComponent},
   {path:'Bottles',component:BottlesComponent},
  ]},
  {path:'mobiles',component:MobilesComponent},
  {path:'bikes',component:BikesComponent},
  {path:'televisions',component:TelevisionsComponent},
  // {path:'users',component:UserComponent},
  // {path:'users/:id',component:UserdetailsComponent},
  {path:' ',redirectTo:'/Home',pathMatch:'full'},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
