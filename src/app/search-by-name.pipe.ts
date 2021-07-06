import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }
    const productsArray = [];
    for (const product of value) {
      if (product['productName'].startsWith(filteredString)) {
        productsArray.push(product);
      }
    }
    return productsArray;
  }
}
