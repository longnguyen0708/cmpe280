import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(items: any[], filter?: any): any {
    if(!items || !filter){
      return items;
    }

    return items.filter(item => item.category.indexOf(filter) !== -1);
  }

}
