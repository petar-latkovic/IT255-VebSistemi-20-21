import { CartService } from './../services/cart.service';
import { Product } from './product.model';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaymerch',
  templateUrl: './displaymerch.component.html',
  styleUrls: ['./displaymerch.component.css']
})
export class DisplaymerchComponent implements OnInit {
  public priceFilter:string="";
  public display: boolean = false;
  @Input() products: any;
  public currentCart: Array<Product>;
  constructor(private _cartService: CartService) {
   }

  ngOnInit(): void {
    this.currentCart = this._cartService.getCurrentCart();
  }

  // Fisher-Yates shuffle algorithm
  shuffleArray(array: any[]){
    var n = array.length, i, t;
    while(n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  }
  onAddToCart(productTitle: HTMLHeadingElement,productPrice: HTMLHeadElement){
    // Filtering products based on title and price
    this.products.filter((product:any) => {
      if(product.title == productTitle.innerText && product.price == parseFloat(productPrice.innerText)){
        // Addiing to currentCartService
        this._cartService.addToCurrentCart(product);
      }
    })
  }

  removeProduct(productTitle: HTMLHeadingElement, productPrice: HTMLHeadingElement){
    // Filtering products array to find matching product title and price
    this.products.filter((product:any) => {
      if(product.title == productTitle.innerText && product.price == parseFloat(productPrice.innerText)){
        // Removing found product from array
        this.products.splice(this.products.indexOf(product), 1);
      }
    })

  }

  editProduct(editTitle: HTMLInputElement, editDescription: HTMLTextAreaElement, editWeight: HTMLInputElement, editPrice: HTMLInputElement, productTitle: HTMLHeadingElement, productPrice: HTMLHeadingElement, productDescription: HTMLParagraphElement){
    let tempProd: Product = new Product(editTitle.value,editDescription.value, parseFloat(editWeight.value),parseFloat(editPrice.value));
    let replaceIndex = 0;
    this.products.forEach((product:any) => {
      if(product.title == productTitle.innerText && product.description == productDescription.innerText && product.price == parseFloat(productPrice.innerText)){
        replaceIndex = this.products.indexOf(product);
      };
    });
    this.products[replaceIndex] = tempProd;
  }
  onEdit(){
    this.display = !this.display;
  }
  clearForm(form: HTMLFormElement){
    form.reset();
  }
}
