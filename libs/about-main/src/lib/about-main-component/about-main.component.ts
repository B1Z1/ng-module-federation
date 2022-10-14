import { Component, OnInit } from '@angular/core';
import { TestService } from '@ng-module-federation/test';

@Component({
  selector: 'ng-module-federation-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css'],
})
export class AboutMainComponent implements OnInit {
  constructor(
    private readonly testService: TestService
  ) {
  }

  ngOnInit() {
    console.log(`About: ${this.testService.getText()}`);

    this.testService.setText('I\'m about module');
  }
}
