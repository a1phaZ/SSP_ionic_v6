import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'progressValue',
	pure: true
})
export class ProgressValuePipe implements PipeTransform {

	transform(value: number, total: number, type: string): string {
		const _total = value > total ? value : total;

		const output = value > 0 ? Math.round(value * 100 / _total) : 0;
		switch (type) {
			case 'position':
				return `${output}%`;
			case 'transform':
				return output > 10 && output < 90 ? `translateX(-20px)` : output >= 90 ? `translateX(-100%)` : 'translateX(-10%)';
		}
	}

}
