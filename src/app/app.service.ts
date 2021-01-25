import  CarType  from './model/car.interface';
import { Car } from './model/car.model';

export class Service{
    cars: CarType[] = [
        new Car(0, 'Honda', 'Japan'),
        new Car(1, 'Lexus', 'Japan'),
        new Car(2, 'Toyota', 'Japan'),
        new Car(3, 'Nissan', 'Japan'),
        new Car(4, 'Citroen', 'France'),
        new Car(5, 'Peugeot', 'France'),
        new Car(6, 'Renault', 'Japan'),
        new Car(7, 'Audi', 'Germany'),
        new Car(8, 'BMW', 'Germany'),
        new Car(9, 'Opel', 'Germany'),
        new Car(10, 'Alfa Romeo', 'Italy')
    ];

    getCars(){
        //returning the copy of an array
        return this.cars.slice();
    }
    getSingleCar(id: number){
        return this.cars[id];
    }
}