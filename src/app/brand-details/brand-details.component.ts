import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import   BrandType  from '../model/brand.interface';
import { Service } from '../app.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {

  brand: BrandType = {};
  fetched: boolean = false;
  constructor(private route: ActivatedRoute,
              private service: Service) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
        const id = +params['id'];
        this.brand = this.service.getSingleBrand(id);
        this.fetched = true;
    })
  }

}
