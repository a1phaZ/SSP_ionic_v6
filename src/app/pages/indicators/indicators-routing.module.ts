import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorsPage } from './indicators.page';

const routes: Routes = [
	{
		path: ':id',
		loadChildren: () => import('../indicator-details/indicator-details.module').then(m => m.IndicatorDetailsPageModule)
	},
  {
    path: '',
    component: IndicatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorsPageRoutingModule {}
