import { Injectable } from '@angular/core';
import { Product } from '../displaymerch/product.model';

@Injectable({
  providedIn: 'root'
})
export class EstimateshippingService {

  constructor() { 
   
  }

  getShipping(cartContent: Product[], destination: string){
    let totalWeight: number = 0;
    cartContent.forEach(product => {
      totalWeight += product.weight;
    });
    return ((totalWeight / 1000)< 5 ? 1 : 1.75) ;//* this.deliveringTo.get(destination);
  }
}
