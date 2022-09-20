import {createSelector} from '@ngrx/store';
import {selectAppDashboard, selectAppDetails, selectAppOrgs, selectAppPeriods} from '../app.selectors';

export const selectDetails = createSelector(
	selectAppDetails,
	selectAppDashboard,
	(details, dashboard) => details[dashboard.selected?.id]?.details
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
			id: d[selected]?.details?.indInfo?.id,
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

//https://ssp.keyauto.ru/api/indicators/getRating/1979?token=a9b096fc6e8f980a0318cab417c02c17
//periodName: 3
// periodValue: 9
// periodYear: 2022
// typeOrg: 10
// brand: 0
// idOrg: 39
// podr: 0
// objectId: 39
// objectType: 10
// user: 1362
