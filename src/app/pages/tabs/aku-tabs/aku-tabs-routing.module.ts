import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkuTabsPage } from './aku-tabs.page';
import {EAkuTabsModel} from './aku-tabs.model';
import {AluCrisisResolver} from '../../../resolvers/alu-crisis.resolver';

const routes: Routes = [
  {
    path: '',
    component: AkuTabsPage,
	  children: [
		  {
			  path: EAkuTabsModel.main,
			  loadChildren: () => import('../../aku/aku-main/aku-main.module')
				  .then(m => m.AkuMainPageModule)
		  },
		  {
			  path: EAkuTabsModel.finance,
			  loadChildren: () => import('../../aku/aku-crisis/aku-crisis.module')
				  .then(m => m.AkuCrisisPageModule),
			  resolve: {
				  directionId: AluCrisisResolver,
			  },
		  },
		  {
			  path: EAkuTabsModel.finance+'/:directionId',
			  loadChildren: () => import('../../aku/aku-rating/aku-rating.module')
				  .then(m => m.AkuRatingPageModule)
		  },
		  {
			  path: EAkuTabsModel.opa,
			  loadChildren: () => import('../../aku/aku-crisis/aku-crisis.module')
				  .then(m => m.AkuCrisisPageModule),
		  },
		  {
			  path: EAkuTabsModel.service,
			  loadChildren: () => import('../../aku/aku-crisis/aku-crisis.module')
				  .then(m => m.AkuCrisisPageModule),
		  },
		  {
			  path: '',
			  pathMatch: 'full',
			  redirectTo: EAkuTabsModel.main
		  }
	  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkuTabsPageRoutingModule {}
