import {NgModule} from '@angular/core';
import {DistributorRatingListItemComponent} from './distributor-rating-list-item.component';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [DistributorRatingListItemComponent],
	imports: [
		CommonModule
	],
	exports: [DistributorRatingListItemComponent]
})
export class DistributorRatingListItemModule {
}
