import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Service } from './app.service';


import { AppComponent } from './app.component';
import { BrandsTableComponent } from './brands-table/brands-table.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';

const routes: Routes = [
  { path: 'brand/:id', component: BrandDetailsComponent },
  { path: 'create', component: CreateBrandComponent },
  { path: '', component: BrandsTableComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    BrandsTableComponent,
    BrandDetailsComponent,
    CreateBrandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
