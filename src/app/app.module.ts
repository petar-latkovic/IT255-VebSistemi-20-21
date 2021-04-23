import { YoutubeService } from './services/youtube.service';
import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplaymerchComponent } from './displaymerch/displaymerch.component';
import { MerchComponent } from './merch/merch.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { BigcartComponent } from './bigcart/bigcart.component';
import { ProductsService } from './services/products.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplaymerchComponent,
    MerchComponent,
    FilterPipe,
    AdminpanelComponent,
    CartComponent,
    HomeComponent,
    BigcartComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    CartService,
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
