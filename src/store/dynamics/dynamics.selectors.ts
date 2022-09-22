import {createSelector} from '@ngrx/store';
import {selectButtonId} from '../app.selectors';
import {selectDetails} from '../details/details.selectors';
import {selectCurrentOrg} from '../organizations/organizations.selectors';
import {selectPeriodByButtonId} from '../period-picker/period-picker.selectors';

export const selectDynamicsRequest = createSelector(
	selectButtonId,
	selectDetails,
	selectCurrentOrg,
	selectPeriodByButtonId,
	(b, d, co, p) => ({
		user: 1362,
		id_ind: d.indInfo.id,
		periodName: p.periodId,
		periodValue: p.periodValue,
		year: p.periodYear,
		brand: 0,
		podr: 0,
		org: co.id,
		objectId: co.id,
		objectType: co.orgType,
	})
);

//user: 1362
// id_ind: 1979
// periodName: 6
// periodValue: 9
// year: 2022
// brand: 0
// org: 39
// podr: 0
// objectId: 39
// objectType: 1
