import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.page.html',
  styleUrls: ['./exercise3.page.scss'],
})
export class Exercise3Page implements OnInit {

  private n: number;

  constructor() { }

  ngOnInit() {
    this.n = 0;
  }

  increase() {
    this.n++;
  }
  decrease() {
    this.n--;
  }
  reset() {
    this.n = 0;
  }
}
