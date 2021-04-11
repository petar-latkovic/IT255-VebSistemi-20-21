import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, priceFilter: any): any {
    if(priceFilter == "") return products;
    return products.filter(function(product:any){
      return product.price == priceFilter || product.price < priceFilter;
    })
  }

}
