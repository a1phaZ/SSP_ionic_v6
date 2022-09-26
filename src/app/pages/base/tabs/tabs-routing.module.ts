import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
			{
				path: 'rating',
				loadChildren: () => import('../../distributor-rating/distributor-rating.module')
					.then(m => m.DistributorRatingPageModule)
			},
			{
				path: 'dynamic',
				loadChildren: () => import('../../in-develop/in-develop.module')
					.then(m => m.InDevelopPageModule)
			},
			{
				path: '',
				redirectTo: 'rating',
				pathMatch: 'full',
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
