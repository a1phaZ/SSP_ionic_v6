import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualificationPersonDetailPage } from './qualification-person-detail.page';
import {EQualificationDetailMethods} from '../../../models/qualification.model';

const routes: Routes = [
  {
    path: '',
    component: QualificationPersonDetailPage,
	  children: [
		  {
			  path: EQualificationDetailMethods.loadQualificationUserFullInfo,
			  loadChildren: () => import('../detail-info/detail-info.module')
				  .then(m => m.DetailInfoPageModule),
			  outlet: 'detail'
		  },
		  {
			  path: EQualificationDetailMethods.getCareer,
			  loadChildren: () => import('../detail-career/detail-career.module')
				  .then(m => m.DetailCareerPageModule),
			  outlet: 'detail'
		  },
		  {
			  path: EQualificationDetailMethods.getMotivation,
			  loadChildren: () => import('../detail-motivation/detail-motivation.module')
				  .then(m => m.DetailMotivationPageModule),
			  outlet: 'detail'
		  },
		  {
			  path: EQualificationDetailMethods.getMemo,
			  loadChildren: () => import('../detail-memo/detail-memo.module')
				  .then(m => m.DetailMemoPageModule),
			  outlet: 'detail'
		  },
	  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualificationPersonDetailPageRoutingModule {}
