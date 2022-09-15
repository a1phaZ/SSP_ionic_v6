import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InnerHtmlPipe} from './inner-html.pipe';
import {ProgressValuePipe} from './progress-value.pipe';
import {SortIndRatingPipe} from './sort-ind-rating.pipe';
import {DirectionFilterPipe} from './direction-filter.pipe';
import {FilterOrgsPipe} from './filter-orgs.pipe';

@NgModule({
	declarations: [
		InnerHtmlPipe,
		ProgressValuePipe,
		SortIndRatingPipe,
		DirectionFilterPipe,
		FilterOrgsPipe,
	],
	exports: [
		InnerHtmlPipe,
		ProgressValuePipe,
		SortIndRatingPipe,
		DirectionFilterPipe,
		FilterOrgsPipe,
	],
	imports: [
		CommonModule
	]
})
export class PipesModule {
}
