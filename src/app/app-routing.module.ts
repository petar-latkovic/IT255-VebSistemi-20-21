import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BigcartComponent } from './bigcart/bigcart.component';
import { DisplaymerchComponent } from './displaymerch/displaymerch.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'merch', component: DisplaymerchComponent},
  {path: 'cart', component: BigcartComponent},
  {path: 'admin', component: AdminpanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
