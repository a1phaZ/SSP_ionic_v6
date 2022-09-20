import {createSelector} from '@ngrx/store';
import {ICurrentDateState} from './current-date.reducer';
import {selectAppCurrentDate, selectAppDashboard, selectAppPeriods} from '../app.selectors';


export const selectCurrentDate = createSelector(
	selectAppCurrentDate,
	selectAppPeriods,
	selectAppDashboard,
	(date: ICurrentDateState, periods, dashboard) => ({
		date: date[dashboard.selected?.id],
		period: periods.find(
			({buttonId: id}) => Number(id) === Number(dashboard.selected?.id)),
		selected: dashboard.selected?.id
	})
);
