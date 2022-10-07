import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityDynamicPage } from './security-dynamic.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityDynamicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityDynamicPageRoutingModule {}
