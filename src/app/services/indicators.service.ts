import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TIndicatorStore} from '../models/indicator.model';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

	indicators$: BehaviorSubject<TIndicatorStore[]> = new BehaviorSubject([]);

  constructor() {
  }
}
