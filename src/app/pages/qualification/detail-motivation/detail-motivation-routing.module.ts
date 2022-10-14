import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMotivationPage } from './detail-motivation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMotivationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMotivationPageRoutingModule {}
