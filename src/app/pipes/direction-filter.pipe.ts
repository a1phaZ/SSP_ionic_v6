import {Pipe, PipeTransform} from '@angular/core';
import {TIndicator, TIndicatorStore} from '../models/indicator.model';

@Pipe({
	name: 'directionFilter'
})
export class DirectionFilterPipe implements PipeTransform {

	transform(value: TIndicatorStore[], direction: number): TIndicator[] {
		const indList = value.find((list) => list.direction === direction);
		if (!indList) {
			return [];
		}
		return indList.data;
	}

}
