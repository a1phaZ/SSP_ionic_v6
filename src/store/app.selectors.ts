import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IDirectionState} from './directions/directions.reducer';
import {IPeriodState} from './period-picker/period-picker.reducer';
import {IOrganizationsState} from './organizations/organizations.reducer';
import {ICurrentDateState} from './current-date/current-date.reducer';
import {IDashboardState} from './dashboard/dashboard.reducer';

export const selectAppDashboard = createFeatureSelector<IDashboardState>('dashboard');
export const selectAppDirections = createFeatureSelector<IDirectionState>('directions');
export const selectAppPeriods = createFeatureSelector<IPeriodState[]>('periods');
export const selectAppOrgs = createFeatureSelector<IOrganizationsState>('organizations');
export const selectAppCurrentDate = createFeatureSelector<ICurrentDateState>('currentDate');

export const selectIndicatorsPageState = (buttonId) => createSelector(
	// selectState,
	selectAppDirections,
	selectAppPeriods,
	selectAppOrgs,
	(directions, periods, organizations) => ({
		directions: {
			currentDirection: directions.currentDirection,
			directionsList: directions.directionsList,
		},
		period: periods.find(
			({buttonId: id}) => Number(id) === Number(buttonId)
		),
		organization: organizations.currentOrg[buttonId]
	})
);

export const selectIndicatorDetailsState = (buttonId) => createSelector(
	selectAppDirections,
	selectAppPeriods,
	selectAppOrgs,
	selectAppCurrentDate,
	(directions, periods, organizations, currentDate) => ({
		buttonId,
		directions: {
			currentDirection: directions.currentDirection,
			directionsList: directions.directionsList,
		},
		period: periods.find(
			({buttonId: id}) => Number(id) === Number(buttonId)
		),
		organization: organizations.currentOrg[buttonId],
		currentDate: currentDate[buttonId]
	})
);


export const selectOrgsModal = createSelector(
	selectAppDashboard,
	(dashboard) => ({
		buttonId: dashboard.selected?.id,
		availableTypes: dashboard.selected?.availableTypes,
		// list: state.organizations.commonList
	})
);

