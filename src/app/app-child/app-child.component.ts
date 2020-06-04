import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-app-child',
  template: `
  <p>{{product.name}}</p>
`
})
export class AppChildComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}