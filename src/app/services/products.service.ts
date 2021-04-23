import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {title:'Mug', description: 'Standard Ceramic 225ml Mug with logo in multiple colors.', weight: 300, price: 12.5},
    {title: 'Shirt', description: 'Black 100% cotton shirt with silver logo on front', weight: 450, price: 20},
    {title: 'Mousepad', description: 'High quality mousepad with silver logo', weight: 225, price: 10}
  ];
  constructor() { }

  getProducts(){
    return this.products;
  }
}
