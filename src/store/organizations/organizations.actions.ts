import {createAction, props} from '@ngrx/store';
import {TOrgSelectItem} from '../../app/models/organization.model';

export enum EOrgsActionTypes {
	setList = '[Organizations] Set List',
	init = '[Organizations] Initialize Organizations',
	selectOrg = '[Organizations] Select Org',
	selectOrgById = '[Organizations] SelectOrg By Id',
}

export const setOrganizationList = createAction(
	EOrgsActionTypes.setList,
	props<{list: TOrgSelectItem[]}>()
);

export const initializeOrgs = createAction(
	EOrgsActionTypes.init,
	props<{buttonId: number}>()
);

export const chooseOrg = createAction(
	EOrgsActionTypes.selectOrg,
	props<{buttonId: number; org: TOrgSelectItem}>()
);

export const chooseOrgById = createAction(
	EOrgsActionTypes.selectOrgById,
	props<{buttonId: number; id?: number}>()
);
