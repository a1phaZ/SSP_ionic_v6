import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TIndicatorDetails} from '../models/indicator.model';

@Injectable({
	providedIn: 'root'
})
export class DetailsService {

	details$: Observable<TIndicatorDetails>;

	constructor() {
	}
}
