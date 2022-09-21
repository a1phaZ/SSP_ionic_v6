import { Pipe, PipeTransform } from '@angular/core';
import {TRating} from '../models/rating.model';

@Pipe({
  name: 'sortIndRating'
})
export class SortIndRatingPipe implements PipeTransform {

	ratingSortOrder: string;
	/**
	 * Takes a value and makes it lowercase.
	 */
	transform(array: any[], ratingSortOrder: string, dc: string): TRating[] {
		this.ratingSortOrder = ratingSortOrder;
		return this.sortRating(dc, array);
	}

	sortRating(dc, array): TRating[] {
		const _a = [...array];
		if(_a.length === 0) {return [];}
		const total = _a[_a.length - 1];
		if (total.total) {
			_a.pop();
		}
		_a.sort((a, b) => {
			if (typeof a[dc] === 'number' || typeof a[dc] === 'string') {
				if (a[dc] > b[dc]) {return this.ratingSortOrder === 'asc' ? 1 : -1;}
				if (a[dc] < b[dc]) {return this.ratingSortOrder === 'asc' ? -1 : 1;}
				return 0;
			}
			if (a[dc].value > b[dc].value) {return this.ratingSortOrder === 'asc' ? 1 : -1;}
			if (a[dc].value < b[dc].value) {return this.ratingSortOrder === 'asc' ? -1 : 1;}
			return 0;
		});
		if (total.total) {
			_a.push(total);
		}
		return _a.map((item) => item.childs ? {...item, childs: this.sortRating(dc, item.childs)} : item);
	}

}
