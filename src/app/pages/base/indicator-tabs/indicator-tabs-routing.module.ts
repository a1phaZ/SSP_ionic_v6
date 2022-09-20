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
