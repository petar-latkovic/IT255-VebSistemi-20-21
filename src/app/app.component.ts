import { Product } from './displaymerch/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InatUnit2';
  currentCart = Array<Product>();
  products = [
    {title:'Mug', description: 'Standard Ceramic 225ml Mug with logo in multiple colors.', weight: 300, price: 12.5},
    {title: 'Shirt', description: 'Black 100% cotton shirt with silver logo on front', weight: 450, price: 20},
    {title: 'Mousepad', description: 'High quality mousepad with silver logo', weight: 225, price: 10}
  ];

  deliveringTo = new Map ([
    ["montenegro", 7.5],
    ["serbia", 5],
    ["croatia", 10],
    ["slovenia", 7.5]
  ]);

  onAdminAdd(newProduct: Product) {
    this.products.push(newProduct);
  }
  addToCartRoot(cartProduct: Product){
    this.currentCart.push(cartProduct);
  }
}
