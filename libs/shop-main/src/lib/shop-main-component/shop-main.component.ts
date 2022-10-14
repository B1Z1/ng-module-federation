import { Component, OnInit } from '@angular/core';
import { TestService } from '@ng-module-federation/test';

@Component({
  selector: 'ng-module-federation-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css'],
})
export class ShopMainComponent implements OnInit {
  constructor(
    private readonly testService: TestService
  ) {
  }

  ngOnInit() {
    console.log(`Shop: ${this.testService.getText()}`);

    this.testService.setText('I\'m shop module');
  }
}
