import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IDirectionState} from './directions/directions.reducer';
import {IPeriodState} from './period-picker/period-picker.reducer';
import {IOrganizationsState} from './organizations/organizations.reducer';
import {ICurrentDateState} from './current-date/current-date.reducer';
import {IDashboardState} from './dashboard/dashboard.reducer';
import {IDetailsState} from './details/details.reducer';
import {IRatingState} from './rating/rating.reducer';
import {IInfluenceState} from './influence/influence.reducer';
import {IPossessionState} from './possessions/possessions.reducer';

export const selectAppDashboard = createFeatureSelector<IDashboardState>('dashboard');
export const selectAppDirections = createFeatureSelector<IDirectionState>('directions');
export const selectAppPeriods = createFeatureSelector<IPeriodState[]>('periods');
export const selectAppOrgs = createFeatureSelector<IOrganizationsState>('organizations');
export const selectAppCurrentDate = createFeatureSelector<ICurrentDateState>('currentDate');
export const selectAppDetails = createFeatureSelector<IDetailsState>('details');
export const selectAppRating = createFeatureSelector<IRatingState>('rating');
export const selectAppInfluence = createFeatureSelector<IInfluenceState>('influence');
export const selectAppPossessions = createFeatureSelector<IPossessionState>('possessions');

export const selectIndicatorsPageState = createSelector(
	// selectState,
	selectAppDirections,
	selectAppPeriods,
	selectAppOrgs,
	selectAppDashboard,
	(directions, periods, organizations, dashboard) => ({
		directions: {
			currentDirection: directions.currentDirection,
			directionsList: directions.directionsList,
		},
		period: periods.find(
			({buttonId: id}) => Number(id) === Number(dashboard.selected?.id)
		),
		organization: organizations.currentOrg[dashboard.selected?.id]
	})
);

export const selectIndicatorDetailsState = createSelector(
		selectAppDirections,
		selectAppPeriods,
		selectAppOrgs,
		selectAppCurrentDate,
		selectAppDashboard,
		(directions, periods, organizations, currentDate, dashboard) => {
			console.table({directions, dashboard, organizations, currentDate});

			return {
				buttonId: dashboard.selected?.id,
				directions: {
					currentDirection: directions.currentDirection,
					directionsList: directions.directionsList,
				},
				period: periods.find(
					({buttonId: id}) => Number(id) === Number(dashboard.selected?.id)
				),
				organization: organizations.currentOrg[dashboard.selected?.id],
				currentDate: currentDate[dashboard.selected?.id]
			};
		}
	);

export const selectButtonId = createSelector(
	selectAppDashboard,
	(db) => db.selected?.id
);


export const selectOrgsModal = createSelector(
	selectAppDashboard,
	(dashboard) => ({
		buttonId: dashboard.selected?.id,
		availableTypes: dashboard.selected?.availableTypes,
		// list: state.organizations.commonList
	})
);

