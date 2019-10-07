import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.page.html',
  styleUrls: ['./exercise5.page.scss'],
})
export class Exercise5Page implements OnInit {

  private min: number;
  private max: number;
  private rand: number;

  constructor() { }

  ngOnInit() {
  }

  gen() {
    this.rand = Math.floor((Math.random() * this.max) + this.min);
  }
}
