import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../product';


@Component({
  selector: 'app-app-parent',
  template: `<h2>{{products.length}} products</h2>
  <app-app-child *ngFor="let product of products"
    [product]="product">
  </app-app-child>
  `
})
export class AppParentComponent implements OnInit {
  products = PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
