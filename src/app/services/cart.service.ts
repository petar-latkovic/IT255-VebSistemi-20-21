import { Injectable, Input } from '@angular/core';
import { Product } from '../displaymerch/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private currentCart = Array<Product>();
  constructor() { }

  getCurrentCart(){
    return this.currentCart;
  }
  addToCurrentCart(cartItem: Product){
    this.currentCart.push(cartItem);
  }
}
