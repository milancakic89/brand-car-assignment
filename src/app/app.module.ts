import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Service } from './app.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
