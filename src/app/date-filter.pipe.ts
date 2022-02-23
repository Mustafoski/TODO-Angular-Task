import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter',
})
export class DateFilterPipe implements PipeTransform {
  transform(list: any[], value: string): any {
    return value ? list.filter((d) => d.date === value.toLowerCase()) : list;
  }
}
