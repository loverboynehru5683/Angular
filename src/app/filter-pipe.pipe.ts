import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    const productsArray = [];
    for (const product of value) {
      if (product['name'].startsWith(filteredString)) {
        productsArray.push(product);
      }
    }
    return productsArray;
  }

}