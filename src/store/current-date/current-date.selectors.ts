import {createSelector} from '@ngrx/store';
import {ICurrentDateState} from './current-date.reducer';
import {selectAppCurrentDate, selectAppPeriods} from '../app.selectors';


export const selectCurrentDate = (buttonId: number) => createSelector(
	selectAppCurrentDate,
	selectAppPeriods,
	(date: ICurrentDateState, periods) => ({
		date: date[buttonId],
		period: periods.find(
			({buttonId: id}) => Number(id) === Number(buttonId)),
	})
);
