import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import   CarType  from '../model/car.interface';
import { Service } from '../app.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car: CarType = {};
  fetched: boolean = false;
  constructor(private route: ActivatedRoute,
              private service: Service) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
        const id = +params['id'];
        this.car = this.service.getSingleCar(id);
        this.fetched = true;
    })
  }

}
