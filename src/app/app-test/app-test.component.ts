import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-test',
  templateUrl: './app-test.component.html',
  styleUrls: ['./app-test.component.css']
})
export class AppTestComponent implements OnInit {
  ok = true;
  toggle() {
    this.ok = !this.ok;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
