import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplaymerchComponent } from './displaymerch/displaymerch.component';
import { MerchComponent } from './merch/merch.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplaymerchComponent,
    MerchComponent,
    FilterPipe,
    AdminpanelComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
