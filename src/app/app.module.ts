import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WWTArrivedComponent } from './wwt-samples/wwt-arrived.component'
import { WWTPolyComponent } from './wwt-sample2/wwt-poly.component';

@NgModule({
  declarations: [
    AppComponent,
    WWTArrivedComponent,
    WWTPolyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
