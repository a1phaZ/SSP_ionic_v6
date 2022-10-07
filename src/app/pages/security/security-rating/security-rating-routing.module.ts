import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SecurityRatingPage} from './security-rating.page';

const routes: Routes = [
	{
		path: '',
		component: SecurityRatingPage,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SecurityRatingPageRoutingModule {
}
