import { ProductsService } from './../services/products.service';
import { CartService } from './../services/cart.service';
import { Product } from './../displaymerch/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any;
  public showCartTotal:boolean = false;
  public items = new Map;
  public currentCart: Array<Product>;
  public cartCost: number = 0;
  public tempPrice: number;

  constructor(private _cartService: CartService, private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.currentCart = this._cartService.getCurrentCart();
    this.products = this._productsService.getProducts();
    this.showCartTotal = this._cartService.getCartTotal();
    
    this.products.forEach((product: { title: any; }) => {
      this.items.set(product.title, 0);
    });
  }
  
  addMoreProducts(title: HTMLDivElement) {
    let current = this.items.get(title.innerText);
    this.items.set(title.innerText, current + 1);
    this.cartCost += this.currentCart.find(item => item.title == title.innerText).price;
  }
  removeProduct(title: HTMLDivElement) {
    if ((this.items.get(title.innerText)) == 0) {
      return this.items.get(title.innerText);
    }else {
      let current = this.items.get(title.innerText);
      this.items.set(title.innerText, current - 1);
      this.cartCost -= this.currentCart.find(item => item.title == title.innerText).price;
    }
  }
  onCartTotal(){
    this.showCartTotal = !this.showCartTotal;
  }
  
}
