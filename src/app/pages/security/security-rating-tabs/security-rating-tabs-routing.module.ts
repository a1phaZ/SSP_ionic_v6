import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SecurityRatingTabsPage} from './security-rating-tabs.page';
import {SecurityMethodResolver} from '../../../resolvers/security-method.resolver';
import {SecurityDetailResolver} from '../../../resolvers/security-detail.resolver';

const routes: Routes = [
	{
		path: 'rating/detail/:id',
		loadChildren: () => import('../security-detail/security-detail.module')
			.then(m => m.SecurityDetailPageModule),
		resolve: {title: SecurityDetailResolver}
	},
	{
		path: '',
		component: SecurityRatingTabsPage,
		children: [
			{
				path: 'rating',
				loadChildren: () => import('../security-rating/security-rating.module')
					.then(m => m.SecurityRatingPageModule)
			},
			{
				path: 'dynamic',
				loadChildren: () => import('../security-dynamic/security-dynamic.module')
					.then(m => m.SecurityDynamicPageModule),
			},
			{
				path: 'method',
				loadChildren: () => import('../security-method/security-method.module')
					.then(m => m.SecurityMethodPageModule),
				resolve: {method: SecurityMethodResolver}
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'rating'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SecurityRatingTabsPageRoutingModule {
}
