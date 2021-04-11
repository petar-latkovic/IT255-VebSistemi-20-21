import { FilterPipe } from './../filter.pipe';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-displaymerch',
  templateUrl: './displaymerch.component.html',
  styleUrls: ['./displaymerch.component.css']
})
export class DisplaymerchComponent implements OnInit {
  priceFilter:string="";
  products = [
    {title:'Mug', description: 'Standard Ceramic 225ml Mug with logo in multiple colors.', weight: 300, price: 12.5},
    {title: 'Shirt', description: 'Black 100% cotton shirt with silver logo on front', weight: 450, price: 20},
    {title: 'Mousepad', description: 'High quality mousepad with silver logo', weight: 225, price: 10}
  ];
  
  constructor() {
   }

  ngOnInit(): void {
  }

  addProduct(title: HTMLInputElement, description: HTMLTextAreaElement, weight: HTMLInputElement, price: HTMLInputElement){
    let tempTitle = `${title.value}`;
    let tempDescription = `${description.value}`;
    let tempWeight = parseFloat(`${weight.value}`);
    let tempPrice = parseFloat(`${price.value}`);

    this.products.push({title: tempTitle, description:tempDescription, weight: tempWeight, price:tempPrice})
  }
  clearForm(form: HTMLFormElement){
    form.reset();
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
    console.log(array)
    return array;
  }
}
