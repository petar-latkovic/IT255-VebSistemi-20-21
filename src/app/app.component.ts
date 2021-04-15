import { Product } from './displaymerch/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InatUnit2';

  products = [
    {title:'Mug', description: 'Standard Ceramic 225ml Mug with logo in multiple colors.', weight: 300, price: 12.5},
    {title: 'Shirt', description: 'Black 100% cotton shirt with silver logo on front', weight: 450, price: 20},
    {title: 'Mousepad', description: 'High quality mousepad with silver logo', weight: 225, price: 10}
  ];

  prodRef: Product = new Product("", "", 0, 0);

  onAdminAdd(newProduct: Product) {
    this.products.push(newProduct);
    console.log(newProduct);
  }
}
