import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[],searchVal: any):any[] {
    return arr.filter(el=>
      el.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      el.price==searchVal

    );
  }

}
