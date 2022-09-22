import {createSelector} from '@ngrx/store';
import {selectDetails} from '../details/details.selectors';
import {selectAppInfluence} from '../app.selectors';
import {selectPeriodByButtonId} from '../period-picker/period-picker.selectors';
import {selectCurrentOrg} from '../organizations/organizations.selectors';
import {TIndicatorInfluenceRequest} from '../../app/models/indicator.model';

export const selectInfluence = createSelector(
	selectDetails,
	selectAppInfluence,
	(d, i) => i[d.indInfo.id]
);

export const selectInfluenceRequest = createSelector(
	selectDetails,
	selectPeriodByButtonId,
	selectCurrentOrg,
	(d, p, co) => ({
		user: 1362,
		periodName: p.periodId,
		periodValue: p.periodValue,
		periodYear: p.periodYear,
		org: co.id,
		podr: 0,
		brand: 0,
		mode: 'depends',
		idDepends: d.indInfo.id,
		objectId: co.id,
		objectType: co.orgType
	} as TIndicatorInfluenceRequest)
);
