import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../app.service';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent {

  constructor(private service: Service, private router: Router) { }

  createBrand(form: NgForm){
    const id = Date.now();
    const brand = form.value.brand;
    const country = form.value.country;
    this.service.createNewBrand(id, brand, country);
    this.router.navigate(['']);
  }

}
