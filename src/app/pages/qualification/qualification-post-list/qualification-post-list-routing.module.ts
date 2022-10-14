import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualificationPostListPage } from './qualification-post-list.page';

const routes: Routes = [
  {
    path: '',
    component: QualificationPostListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualificationPostListPageRoutingModule {}
