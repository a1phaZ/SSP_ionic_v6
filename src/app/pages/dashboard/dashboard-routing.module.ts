import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardPage} from './dashboard.page';
import {DashboardGuard} from '../../guards/dashboard.guard';
import {DistributorRatingResolver} from '../../resolvers/distributor-rating.resolver';
import {AkuTabsResolver} from '../../resolvers/aku-tabs.resolver';

const routes: Routes = [
	{
		path: ':buttonId',
		component: DashboardPage,
		// loadChildren: () => import('./dashboard.module').then(m => m.DashboardPageModule),
	},
	{
		path: ':prevId/:buttonId/indicators',
		loadChildren: () => import('../indicators/indicators.module').then(m => m.IndicatorsPageModule),
		canActivateChild: [DashboardGuard]
	},
	{
		path: ':prevId/:buttonId/distributor-rating',
		loadChildren: () => import('../base/tabs/tabs.module')
			.then(m => m.TabsPageModule),
		resolve: {tabs: DistributorRatingResolver},
		canActivateChild: [DashboardGuard]
	},
	{
		path: ':buttonId/aku',
		loadChildren: () => import('../aku/aku-tabs/aku-tabs.module')
			.then(m => m.AkuTabsPageModule),
		resolve: {tabs: AkuTabsResolver},
		canActivateChild: [DashboardGuard]
	},
	{
		path: '',
		component: DashboardPage,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardPageRoutingModule {
}
