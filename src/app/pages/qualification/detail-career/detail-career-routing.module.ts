import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCareerPage } from './detail-career.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCareerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCareerPageRoutingModule {}
