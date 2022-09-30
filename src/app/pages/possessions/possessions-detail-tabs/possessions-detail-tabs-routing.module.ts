import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PossessionsDetailTabsPage} from './possessions-detail-tabs.page';

const routes: Routes = [
	{
		path: '',
		component: PossessionsDetailTabsPage,
		children: [
			{
				path: ':detail',
				loadChildren: () => import('../possessions-details/possessions-details.module')
					.then(m => m.PossessionsDetailsPageModule)
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'info'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PossessionsDetailTabsPageRoutingModule {
}
