import {NgModule} from '@angular/core';
import {DistributorRatingListComponent} from './distributor-rating-list.component';
import {DistributorRatingListItemModule} from '../distributor-rating-list-item/distributor-rating-list-item.module';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [DistributorRatingListComponent],
	imports: [
		DistributorRatingListItemModule,
		CommonModule
	],
	exports: [DistributorRatingListComponent]
})
export class DistributorRatingList {}
