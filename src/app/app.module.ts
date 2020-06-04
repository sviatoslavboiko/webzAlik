import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppProductComponent } from './app-product/app-product.component';
import { AppProductsComponent } from './app-products/app-products.component';
import { AppTestComponent } from './app-test/app-test.component';
import { HttpClientModule } from '@angular/common/http';
// import { LocationTypeModule } from './location-type/location-type.module';
import { AppChildComponent } from './app-child/app-child.component';
import { AppParentComponent } from './app-parent/app-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductComponent,
    AppProductsComponent,
    AppTestComponent,
    AppChildComponent,
    AppParentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // LocationTypeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
