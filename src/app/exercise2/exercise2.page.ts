import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.page.html',
  styleUrls: ['./exercise2.page.scss'],
})
export class Exercise2Page implements OnInit {

  private buttonText: string;
  private name: string;
  private show: boolean;

  constructor() { }

  ngOnInit() {
    this.buttonText = 'Show name';
    this.name = '';
    this.show = false;
  }

  switch() {
    this.show = !this.show;

    if (this.show) {
      this.name = 'Ángel López';
      this.buttonText = 'Hide name';
    } else {
      this.name = '';
      this.buttonText = 'Show name';
    }
  }

}
