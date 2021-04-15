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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplaymerchComponent,
    MerchComponent,
    FilterPipe,
    AdminpanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
