import { CartService } from './../services/cart.service';
import { Product } from './../displaymerch/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() products: any;
  public showCartTotal:boolean = true;
  public showCart:boolean = true;
  public items = new Map;
  public currentCart: Array<Product>;
  public cartCost: number = 0;
  public tempPrice: number;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.products.forEach((product: { title: any; }) => {
      this.items.set(product.title, 0);
    });
    this.currentCart = this._cartService.getCurrentCart();
    
  }
  addMoreProducts(title: HTMLDivElement) {
    let current = this.items.get(title.innerText)
    this.items.set(title.innerText, current + 1)
    this.cartCost += this.currentCart.find(item => item.title == title.innerText).price;
  }
  removeProduct(title: HTMLDivElement) {
    if ((this.items.get(title.innerText)) == 0) {
      return this.items.get(title.innerText)
    }else {
      let current = this.items.get(title.innerText);
      this.items.set(title.innerText, current - 1);
      this.cartCost -= this.currentCart.find(item => item.title == title.innerText).price;
    }
  }
  
}
