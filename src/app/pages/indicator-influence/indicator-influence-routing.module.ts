import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorInfluencePage } from './indicator-influence.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorInfluencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorInfluencePageRoutingModule {}
