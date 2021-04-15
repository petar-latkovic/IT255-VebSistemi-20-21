import { Product } from './product.model';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaymerch',
  templateUrl: './displaymerch.component.html',
  styleUrls: ['./displaymerch.component.css']
})
export class DisplaymerchComponent implements OnInit {
  priceFilter:string="";
  display: boolean = false;
  @Input() products: any;
  
  constructor() {
   }

  ngOnInit(): void {
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

  removeProduct(productTitle: HTMLHeadingElement, productPrice: HTMLHeadingElement){

    this.products.filter((product:any) => {
      if(product.title == productTitle.innerText && product.price == parseFloat(productPrice.innerText)){
        this.products.splice(this.products.indexOf(product), 1)
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
