import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
  standalone: true,
})
export class ShortNamePipe implements PipeTransform {
  transform(value: string): string {
    const words = value.split(' ');
    const initials = words.map((word) => word.charAt(0));
    return initials.join('');
  }
}
