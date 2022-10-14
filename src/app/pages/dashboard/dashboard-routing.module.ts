import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardPage} from './dashboard.page';
import {DashboardGuard} from '../../guards/dashboard.guard';
import {DistributorRatingResolver} from '../../resolvers/distributor-rating.resolver';
import {AkuTabsResolver} from '../../resolvers/aku-tabs.resolver';
import {EDashboardPath} from '../../models/dashboard.model';
import {PossessionsTabsResolver} from '../../resolvers/possessions-tabs.resolver';
import {SecurityTabsResolver} from '../../resolvers/security-tabs.resolver';

const routes: Routes = [
	{
		path: ':buttonId',
		component: DashboardPage,
		// loadChildren: () => import('./dashboard.module').then(m => m.DashboardPageModule),
	},
	{
		path: ':buttonId/' + EDashboardPath.aku,
		loadChildren: () => import('../aku/aku-tabs/aku-tabs.module')
			.then(m => m.AkuTabsPageModule),
		resolve: {tabs: AkuTabsResolver},
		canActivateChild: [DashboardGuard]
	},
	{
		path: ':buttonId/' + EDashboardPath.possessions,
		loadChildren: () => import('../possessions/possessions-tabs/possessions-tabs.module')
			.then(m => m.PossessionsTabsPageModule),
		resolve: {tabs: PossessionsTabsResolver},
		canActivateChild: [DashboardGuard]
	},
	{
		path: ':prevId/:buttonId/' + EDashboardPath.indicators,
		loadChildren: () => import('../indicators/indicators.module').then(m => m.IndicatorsPageModule),
		canActivateChild: [DashboardGuard]
	},
	{
		path: ':prevId/:buttonId/' + EDashboardPath.qualification,
		loadChildren: () => import('../qualification/qualification-list/qualification-list.module')
			.then(m => m.QualificationListPageModule),
		canActivateChild: [DashboardGuard]
	},
	{
		path: ':prevId/:buttonId/' + EDashboardPath.distributorRating,
		loadChildren: () => import('../base/tabs/tabs.module')
			.then(m => m.TabsPageModule),
		resolve: {tabs: DistributorRatingResolver},
		canActivateChild: [DashboardGuard]
	},
	{
		path: ':prevId/:buttonId/:security',
		loadChildren: () => import('../security/security-rating-tabs/security-rating-tabs.module')
			.then(m => m.SecurityRatingTabsPageModule),
		resolve: {tabs: SecurityTabsResolver},
		canActivateChild: [DashboardGuard]
	},
	{
		path: ':buttonId/' + EDashboardPath.inDev,
		loadChildren: () => import('../in-develop/in-develop.module')
			.then(m => m.InDevelopPageModule)
	},
	{
		path: ':prevId/:buttonId/' + EDashboardPath.inDev,
		loadChildren: () => import('../in-develop/in-develop.module')
			.then(m => m.InDevelopPageModule)
	},
	{
		path: '',
		component: DashboardPage,
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardPageRoutingModule {
}
