import { Product } from './../displaymerch/product.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  @Output() productAdded: EventEmitter<Product>  = new EventEmitter<Product>();
  prodTemp:Product = new Product("","",0,0);
  @Input() products: any;
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(title: HTMLInputElement, description: HTMLTextAreaElement, weight: HTMLInputElement, price: HTMLInputElement){
    this.prodTemp.title = `${title.value}`;
    this.prodTemp.description = `${description.value}`;
    this.prodTemp.weight = parseFloat(`${weight.value}`);
    this.prodTemp.price = parseFloat(`${price.value}`);

    //let csv = this.prodTemp.title +","+this.prodTemp.description+","+this.prodTemp.weight+","+this.prodTemp.price;
    this.productAdded.emit(this.prodTemp);
  }
  clearForm(form: HTMLFormElement){
    form.reset();
  }

}
