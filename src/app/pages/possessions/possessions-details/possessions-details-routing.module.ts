import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PossessionsDetailsPage } from './possessions-details.page';

const routes: Routes = [
  {
    path: '',
    component: PossessionsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PossessionsDetailsPageRoutingModule {}
