import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(list: any[], value: string): any {
    return value
      ? list.filter(
          (d) => d.status === value.charAt(0).toUpperCase() + value.slice(1)
        )
      : list;
  }
}
