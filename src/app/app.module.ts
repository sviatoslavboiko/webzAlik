import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppProductComponent } from './app-product/app-product.component';
import { AppProductsComponent } from './app-products/app-products.component';
import { AppTestComponent } from './app-test/app-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductComponent,
    AppProductsComponent,
    AppTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
