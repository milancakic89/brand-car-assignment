export class Car{
    public id: number;
    public name: string;
    public country: string;

    constructor(id: number, name: string, country: string){
        this.name = name;
        this.id = id;
        this.country = country;
    }
}