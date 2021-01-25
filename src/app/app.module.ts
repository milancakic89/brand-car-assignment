import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Service } from './app.service';


import { AppComponent } from './app.component';
import { CarTableComponent } from './car-table/car-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CarTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
