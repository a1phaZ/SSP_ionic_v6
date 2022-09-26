import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InDevelopPage } from './in-develop.page';

const routes: Routes = [
  {
    path: '',
    component: InDevelopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InDevelopPageRoutingModule {}
