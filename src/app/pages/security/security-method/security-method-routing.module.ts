import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityMethodPage } from './security-method.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityMethodPageRoutingModule {}
