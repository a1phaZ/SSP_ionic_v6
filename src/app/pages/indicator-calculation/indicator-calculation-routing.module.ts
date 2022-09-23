import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorCalculationPage } from './indicator-calculation.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorCalculationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorCalculationPageRoutingModule {}
