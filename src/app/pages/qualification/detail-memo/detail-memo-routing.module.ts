import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMemoPage } from './detail-memo.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMemoPageRoutingModule {}
