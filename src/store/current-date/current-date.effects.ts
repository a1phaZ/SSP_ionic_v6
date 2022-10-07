import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ECurrentDateActions} from './current-date.actions';
import {exhaustMap} from 'rxjs/operators';
import {changePeriodValueByDate} from '../period-picker/period-picker.actions';
import {of} from 'rxjs';
import {getPeriod} from '../../app/shared/utils/period.utils';

@Injectable()
export class CurrentDateEffects {

	setDate$ = createEffect(() => this.actions$.pipe(
		ofType(ECurrentDateActions.setDate),
		exhaustMap(({buttonId, date, periodId}) => of(changePeriodValueByDate({
			buttonId,
			periodId, ...getPeriod(date, periodId)
		})))
	));

	constructor(
		private actions$: Actions,
	) {
	}
}
