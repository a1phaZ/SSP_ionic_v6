import {createSelector} from '@ngrx/store';
import {
	selectAppDashboard,
	selectAppDetails,
	selectAppDirections,
	selectAppOrgs,
	selectAppPeriods,
	selectButtonId
} from '../app.selectors';

export const selectDetails = createSelector(
	selectAppDetails,
	selectAppDashboard,
	(dt, dashboard) => dt[dashboard.selected?.id]
);

export const selectRatingPageState = createSelector(
	selectAppDashboard,
	selectAppDetails,
	selectAppPeriods,
	selectAppOrgs,
	(db, d, p, o) => {
		const selected = db.selected?.id;
		const period = p.find(({buttonId}) => buttonId === selected);
		return {
			id: d[selected]?.indInfo?.id,
			periodName: period?.periodId,
			periodValue: period?.periodValue,
			periodYear: period?.periodYear,
			typeOrg: o.currentOrg[selected]?.orgType,
			brand: 0,
			idOrg: o.currentOrg[selected]?.id,
			podr: 0,
			objectId: o.currentOrg[selected]?.id,
			objectType: o.currentOrg[selected]?.orgType,
			user: 1362,
		};
	}
);

export const selectDetailsViewState = createSelector(
	selectButtonId,
	selectAppOrgs,
	selectAppDetails,
	selectAppDirections,
	(id, o, d, dir) => ({
		titles: {
			primary: d[id]?.indInfo?.title,
			secondary: o.currentOrg[id].title,
			tertiary: dir.directionsList.find((item) => item.id === dir.currentDirection).title
		},
		buttonId: id,
	})
);
