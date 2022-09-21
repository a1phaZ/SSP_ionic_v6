import {selectAppDashboard, selectAppRating} from '../app.selectors';
import {createSelector} from '@ngrx/store';

export const selectRating = createSelector(
	selectAppRating,
	selectAppDashboard,
	(r, dashboard) => r[dashboard.selected?.id]
);
