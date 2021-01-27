import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Service } from './app.service';


import { AppComponent } from './app.component';
import { BrandsTableComponent } from './brands-table/brands-table.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';

const routes: Routes = [
  { path: 'brand/:id', component: BrandDetailsComponent },
  { path: '', component: BrandsTableComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    BrandsTableComponent,
    BrandDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
