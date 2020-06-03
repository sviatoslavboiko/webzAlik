import { Component, OnInit } from '@angular/core';
import {AppProductComponent} from "../app-product/app-product.component";

@Component({
  selector: 'app-app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.css']
})
export class AppProductsComponent implements OnInit {

  products: Array<AppProductComponent> = [new AppProductComponent('prod1'), new AppProductComponent('prod2'), new AppProductComponent('prod3')];
  constructor() { }

  ngOnInit(): void {

  }

}
