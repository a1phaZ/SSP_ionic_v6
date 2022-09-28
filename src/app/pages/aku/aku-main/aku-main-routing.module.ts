import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkuMainPage } from './aku-main.page';

const routes: Routes = [
  {
    path: '',
    component: AkuMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkuMainPageRoutingModule {}
