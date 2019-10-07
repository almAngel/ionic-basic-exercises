import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.page.html',
  styleUrls: ['./exercise7.page.scss'],
})
export class Exercise7Page implements OnInit {

  private eur: number;
  private pesetas: number;

  constructor() { }

  ngOnInit() {
  }

  convertPesetas() {
    this.pesetas = this.eur * 166.386;
  }

  convertEuros() {
    this.eur = this.pesetas / 166.386;
  }

}
