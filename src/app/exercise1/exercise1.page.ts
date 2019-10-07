import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.page.html',
  styleUrls: ['./exercise1.page.scss'],
})
export class Exercise1Page implements OnInit {

  private name: string;

  constructor() { }

  ngOnInit() {
  }

  public showName() {
    this.name = 'Ángel López';
  }
  public hideName() {
    this.name = '';
  }
}
