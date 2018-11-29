import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WWTArrivedComponent} from './wwt-samples/wwt-arrived.component';
import {WWTPolyComponent} from './wwt-sample2/wwt-poly.component';
const routes: Routes = [
  { path: '', redirectTo: '/simple', pathMatch: 'full' },

  { path: 'arrived',  children: [
    {
      path: '',
     component: WWTArrivedComponent
    } ] 
  },
  { path: 'poly',  children: [
    {
      path: '',
     component: WWTPolyComponent
    } ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
