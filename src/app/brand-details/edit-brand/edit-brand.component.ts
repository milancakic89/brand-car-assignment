import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import BrandType from 'src/app/model/brand.interface';
import { Service } from 'src/app/app.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  brand: BrandType = {};
  fetched: boolean = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: Service ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      const id = +params['id'];
      this.brand = this.service.getSingleBrand(id);
      this.fetched = true;
  })
  }
  saveChanges(form: NgForm){
    const id = +form.value.id;
    const brand =  form.value.brand;
    const country = form.value.country;
    this.service.editBrand(id, brand, country);
    this.router.navigate(['']);
  }
}
