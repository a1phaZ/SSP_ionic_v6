import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
	{
		path: ':buttonId',
		component: DashboardPage,
		// loadChildren: () => import('./dashboard.module').then(m => m.DashboardPageModule),
	},
	{
		path: ':prevId/:buttonId/indicators',
		loadChildren: () => import('../indicators/indicators.module').then(m => m.IndicatorsPageModule),
	},
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
