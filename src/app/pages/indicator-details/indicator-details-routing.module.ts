import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndicatorDetailsPage} from './indicator-details.page';

const routes: Routes = [
	{
		path: '',
		component: IndicatorDetailsPage,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IndicatorDetailsPageRoutingModule {
}
