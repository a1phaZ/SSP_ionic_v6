import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkuCrisisPage } from './aku-crisis.page';

const routes: Routes = [
  {
    path: '',
    component: AkuCrisisPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkuCrisisPageRoutingModule {}
