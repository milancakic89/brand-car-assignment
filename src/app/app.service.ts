import  BrandType  from './model/brand.interface';
import { Brand } from './model/brand.model';


export class Service{
    brands: BrandType[] = [
        new Brand(0, 'Honda', 'Japan'),
        new Brand(1, 'Lexus', 'Japan'),
        new Brand(2, 'Toyota', 'Japan'),
        new Brand(3, 'Nissan', 'Japan'),
        new Brand(4, 'Citroen', 'France'),
        new Brand(5, 'Peugeot', 'France'),
        new Brand(6, 'Renault', 'Japan'),
        new Brand(7, 'Audi', 'Germany'),
        new Brand(8, 'BMW', 'Germany'),
        new Brand(9, 'Opel', 'Germany'),
        new Brand(10, 'Alfa Romeo', 'Italy'),
        new Brand(11, 'Aston Martin', 'United Kingdom')
    ];
    getBrands(): BrandType[]{
        return this.brands.slice();
    }
    getSingleBrand(id: number): BrandType {
        return this.brands.filter(brand => brand.id === id)[0];
    }
    createNewBrand(id: number, name: string, country: string): BrandType{
        const brand = new Brand(id, name, country);
        this.brands.push(brand);
        return brand;
    }
    editBrand(id: number, name: string, country: string): BrandType{
        const brand = this.getSingleBrand(id);
        brand.name = name;
        brand.country = country;
        return brand;
    }
}