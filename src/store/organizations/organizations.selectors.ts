import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';

export const getState = (state: IAppState) => state.organizations;

export const selectOrgsCommonList = createSelector(
	getState,
	(state) => state.commonList
);

export const selectOrganizationsByButton = (buttonId: number) => createSelector(
	getState,
	(state) => state.list[buttonId],
);

export const selectCurrentOrg = (buttonId: number) => createSelector(
	getState,
	(state) => state.currentOrg[buttonId]
);
