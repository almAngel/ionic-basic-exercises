import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'exercise1', loadChildren: './exercise1/exercise1.module#Exercise1PageModule' },
  { path: 'exercise2', loadChildren: './exercise2/exercise2.module#Exercise2PageModule' },
  { path: 'exercise3', loadChildren: './exercise3/exercise3.module#Exercise3PageModule' },
  { path: 'exercise4', loadChildren: './exercise4/exercise4.module#Exercise4PageModule' },
  { path: 'exercise5', loadChildren: './exercise5/exercise5.module#Exercise5PageModule' },
  { path: 'exercise6', loadChildren: './exercise6/exercise6.module#Exercise6PageModule' },
  { path: 'exercise7', loadChildren: './exercise7/exercise7.module#Exercise7PageModule' },
  { path: 'exercise8', loadChildren: './exercise8/exercise8.module#Exercise8PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
