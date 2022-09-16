import {createAction, props} from '@ngrx/store';
import {TDashboardItem} from '../../app/models/dashboard.model';

export const selectButton = createAction(
	'[Dashboard] selectButton',
	props<{item: TDashboardItem}>()
);

export const dashboardBack = createAction(
	'[Dashboard] Back'
);
