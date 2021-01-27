import { Component, OnInit } from '@angular/core';
import { Service } from '../app.service';
import BrandType from '../model/brand.interface';

@Component({
  selector: 'app-brands-table',
  templateUrl: './brands-table.component.html',
  styleUrls: ['./brands-table.component.css']
})
export class BrandsTableComponent implements OnInit {
  brands: BrandType[] = []; 

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.brands = this.service.getBrands();
  }

}
