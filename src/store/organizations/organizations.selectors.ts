import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {selectAppOrgs, selectButtonId} from '../app.selectors';

export const getState = (state: IAppState) => state.organizations;

export const selectOrgsCommonList = createSelector(
	getState,
	(state) => state.commonList
);

export const selectOrganizationsByButton = (buttonId: number) => createSelector(
	getState,
	(state) => state.list[buttonId],
);

export const selectCurrentOrg = createSelector(
	selectButtonId,
	selectAppOrgs,
	(b, orgs) => orgs.currentOrg[b]
);
