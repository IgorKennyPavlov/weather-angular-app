import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(target: any, args: any): any {
    const {key, value} = args;
    return target.filter(item => item[key] === value);
  }

}
