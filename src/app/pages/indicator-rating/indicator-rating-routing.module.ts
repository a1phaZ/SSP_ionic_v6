import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorRatingPage } from './indicator-rating.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorRatingPageRoutingModule {}
