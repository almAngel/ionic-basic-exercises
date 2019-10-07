import { OctocatComponent } from './octocat/octocat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Exercise6Page } from './exercise6.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise6Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Exercise6Page, OctocatComponent]
})
export class Exercise6PageModule {}
