import { Component, OnInit } from '@angular/core';
import { Service } from '../app.service';
import CarType from '../model/car.interface';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  cars: CarType[] = []; 

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.cars = this.service.getCars();
    console.log(this.cars)
  }

}
