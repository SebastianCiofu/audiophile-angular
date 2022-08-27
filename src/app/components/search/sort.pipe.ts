import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfaces/interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    if (filterString === 'ascending') {
      value.sort((a: Product, b: Product) => {
        return a.price - b.price;
      });
    } else if (filterString === 'descending') {
      value.sort((a: Product, b: Product) => {
        return b.price - a.price;
      });
    }
  }
}
