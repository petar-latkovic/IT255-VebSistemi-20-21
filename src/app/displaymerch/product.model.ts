export class Product {
    title: string;
    description: string;
    weight: number;
    price: number;

    constructor(title: string, description: string, weight: number, price: number){
        this.title = title;
        this.description = description;
        this.weight = weight;
        this.price = price;
    }

}