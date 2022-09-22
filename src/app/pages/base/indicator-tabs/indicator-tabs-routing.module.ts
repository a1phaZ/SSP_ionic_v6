import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndicatorTabsPage} from './indicator-tabs.page';

const routes: Routes = [
	{
		path: '',
		component: IndicatorTabsPage,
		children: [
			{
				path: 'details',
				loadChildren: () => import('../../indicator-details/indicator-details.module').then(m => m.IndicatorDetailsPageModule),
			},
			{
				path: 'rating',
				loadChildren: () => import('../../indicator-rating/indicator-rating.module').then( m => m.IndicatorRatingPageModule)
			},
			{
				path: 'influence',
				loadChildren: () => import('../../indicator-influence/indicator-influence.module').then(m => m.IndicatorInfluencePageModule)
			},
			{
				path: 'dynamics',
				loadChildren: () => import('../../indicator-dynamics/indicator-dynamics.module').then(m => m.IndicatorDynamicsPageModule)
			},
			{
			  path: '',
			  redirectTo: 'details',
			  pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IndicatorTabsPageRoutingModule {
}
