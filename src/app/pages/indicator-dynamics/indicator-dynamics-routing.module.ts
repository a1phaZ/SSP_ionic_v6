import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorDynamicsPage } from './indicator-dynamics.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorDynamicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorDynamicsPageRoutingModule {}
