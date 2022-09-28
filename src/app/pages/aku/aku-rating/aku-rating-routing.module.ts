import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkuRatingPage } from './aku-rating.page';

const routes: Routes = [
  {
    path: '',
    component: AkuRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkuRatingPageRoutingModule {}
