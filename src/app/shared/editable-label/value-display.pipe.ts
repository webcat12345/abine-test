import { Pipe, PipeTransform } from '@angular/core';
import { SelectOption } from '../../core/interface/common';

@Pipe({
  name: 'valueDisplay'
})
export class ValueDisplayPipe implements PipeTransform {

  transform(value: any, options?: SelectOption[]): any {

    if (options && options.length > 0) {
      const option = options.find(x => x.value == value);
      return option ? option.label : value
    } else {
      return value;
    }
  }
}
