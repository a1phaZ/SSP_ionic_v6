import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {selectAppOrgs, selectButtonId} from '../app.selectors';

export const getState = (state: IAppState) => state.organizations;

export const selectOrgsCommonList = createSelector(
	getState,
	(state) => state.commonList
);

export const selectOrganizationsByButton = createSelector(
	getState,
	selectButtonId,
	(state, buttonId) => state.list[buttonId],
);

export const selectCurrentOrg = createSelector(
	selectButtonId,
	selectAppOrgs,
	(b, orgs) => orgs.currentOrg[b]
);

export const selectOrgById = (id: number) => createSelector(
	selectButtonId,
	selectAppOrgs,
	(b, orgs) => {
		console.log(b, orgs, orgs.list[b].find((_org) => _org.id === id), id);
		return orgs.list[b].find((_org) => _org.id === id);
	}
);
