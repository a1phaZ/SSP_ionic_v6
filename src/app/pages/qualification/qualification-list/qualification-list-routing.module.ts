import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {QualificationListPage} from './qualification-list.page';

const routes: Routes = [
	{
		path: ':postId',
		loadChildren: () => import('../qualification-post-list/qualification-post-list.module')
			.then(m => m.QualificationPostListPageModule)
	},
	{
		path: ':postId/:userId',
		loadChildren: () => import('../qualification-person-detail/qualification-person-detail.module')
			.then(m => m.QualificationPersonDetailPageModule),
	},
	{
		path: '',
		component: QualificationListPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class QualificationListPageRoutingModule {
}
