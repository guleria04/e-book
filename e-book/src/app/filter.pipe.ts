import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
// this is filter for language
transform(products: any[], searchLanguage: string, searchBinding: string, searchPrice: any): any[] {
  if (searchLanguage === 'all' && searchBinding === 'all' && searchPrice === 'all') {
    return products;
  }
  return products.filter((product) => {
    let matchLanguage = true;
    let matchBinding = true;
    let matchPrice = true;
    if (searchLanguage !== 'all') {
      matchLanguage = product.language === searchLanguage;
    }
    if (searchBinding !== 'all') {
      matchBinding = product.binding === searchBinding;
    }
    if (searchPrice !== 'all') {
      matchPrice = product.price === searchPrice;
    }
    return matchLanguage && matchBinding && matchPrice;
  });
}
}
