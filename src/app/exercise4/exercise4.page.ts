import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.page.html',
  styleUrls: ['./exercise4.page.scss'],
})
export class Exercise4Page implements OnInit {

  private response: string;
  @Input() public name: string;

  constructor() { }

  ngOnInit() {
    this.name = '';
  }

  greet() {
    this.response = 'Hello ' + this.name + '!';
  }

}
