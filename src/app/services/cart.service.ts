import { Injectable, Input } from '@angular/core';
import { Product } from '../displaymerch/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private currentCart = Array<Product>();
  private cartTotal: boolean;
  constructor() { }

  getCurrentCart(){
    return this.currentCart;
  }
  addToCurrentCart(cartItem: Product){
    this.currentCart.push(cartItem);
  }
  getCartTotal(){
    return this.cartTotal;
  }
  onCartTotal(){
    this.cartTotal = !this.onCartTotal;
  }
}
