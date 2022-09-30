import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PossessionsTabsPage } from './possessions-tabs.page';
import {PossessionsDetailTabsResolver} from '../../../resolvers/possessions-detail-tabs.resolver';

const routes: Routes = [
  {
    path: '',
    component: PossessionsTabsPage,
	  children: [
		  {
			  path: ':filter',
			  loadChildren: () => import('../possessions-list/possessions-list.module')
				  .then(m => m.PossessionsListPageModule)
		  },
		  {
			  path: '',
			  pathMatch: 'full',
			  redirectTo: 'city'
		  }
	  ]
  },
	{
		path: ':filter/:id',
		loadChildren: () => import('../possessions-detail-tabs/possessions-detail-tabs.module')
			.then(m => m.PossessionsDetailTabsPageModule),
		resolve: {tabs: PossessionsDetailTabsResolver}
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PossessionsTabsPageRoutingModule {}
