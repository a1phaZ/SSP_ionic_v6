import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortIndRating'
})
export class SortIndRatingPipe implements PipeTransform {

	ratingSortOrder: string;
	/**
	 * Takes a value and makes it lowercase.
	 */
	transform(array: any[], ratingSortOrder: string, dc: string) {
		this.ratingSortOrder = ratingSortOrder;
		return this.sortRating(dc, array);

	}

	sortRating(dc, array) {
		if(array.length === 0) {return [];}
		const total = array[array.length - 1];
		if (total.total) {
			array.pop();
		}
		array.sort((a, b) => {
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
			array.push(total);
		}
		return array.map((item) => item.childs ? {...item, childs: this.sortRating(dc, item.childs)} : item);
	}

}
