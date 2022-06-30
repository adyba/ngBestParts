import { Pipe, PipeTransform } from '@angular/core';
import { Address, User } from '../models/user.model';

@Pipe({
  name: 'concatAddress',
})
export class ConcatAddress implements PipeTransform {
  transform(value: Address, ...args: unknown[]): unknown {
    console.log('concatPipe');
    return `${value.street}, ${value.city}, ${value.zipcode}`;
  }
}
