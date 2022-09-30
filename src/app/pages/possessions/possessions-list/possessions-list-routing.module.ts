import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PossessionsListPage } from './possessions-list.page';

const routes: Routes = [
  {
    path: '',
    component: PossessionsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PossessionsListPageRoutingModule {}
