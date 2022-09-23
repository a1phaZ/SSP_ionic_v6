import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistributorRatingPage } from './distributor-rating.page';

const routes: Routes = [
  {
    path: '',
    component: DistributorRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistributorRatingPageRoutingModule {}
