import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent implements OnInit {

  inputProduct = '';
  constructor(@Inject(String) inputProduct: string) {
    this.inputProduct = inputProduct;
  }

  ngOnInit(): void {

  }

}
