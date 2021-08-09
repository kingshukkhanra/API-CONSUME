import { Pipe, PipeTransform } from '@angular/core';
import { Blogers } from './blogers';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Blogers[], filterstring: string): Blogers[] {
    if(value.length == 0 || !filterstring){
      return value;
    }
       return value.filter(item =>{
         if(item.category === filterstring)
          return item;
         else
           return false;
       });
  }

}
