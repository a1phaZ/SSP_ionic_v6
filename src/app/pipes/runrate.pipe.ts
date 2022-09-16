import { Pipe, PipeTransform } from '@angular/core';
import {TIndicator} from '../models/indicator.model';

@Pipe({
  name: 'runrate'
})
export class RunratePipe implements PipeTransform {

  transform(list: TIndicator[] = [], filter: boolean, rr: number = 80): unknown {
    return filter ? list.filter(({runRate}) => runRate < rr) : list;
  }

}
