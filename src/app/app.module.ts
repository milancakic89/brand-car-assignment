import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Service } from './app.service';


import { AppComponent } from './app.component';
import { CarTableComponent } from './car-table/car-table.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  { path: 'brand/:id', component: CarDetailsComponent },
  { path: '', component: CarTableComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    CarTableComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
