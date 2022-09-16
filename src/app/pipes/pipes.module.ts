import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InnerHtmlPipe} from './inner-html.pipe';
import {ProgressValuePipe} from './progress-value.pipe';
import {SortIndRatingPipe} from './sort-ind-rating.pipe';
import {DirectionFilterPipe} from './direction-filter.pipe';
import {FilterOrgsPipe} from './filter-orgs.pipe';
import { RunratePipe } from './runrate.pipe';

@NgModule({
	declarations: [
		InnerHtmlPipe,
		ProgressValuePipe,
		SortIndRatingPipe,
		DirectionFilterPipe,
		FilterOrgsPipe,
  RunratePipe,
	],
	exports: [
		InnerHtmlPipe,
		ProgressValuePipe,
		SortIndRatingPipe,
		DirectionFilterPipe,
		FilterOrgsPipe,
		RunratePipe,
	],
	imports: [
		CommonModule
	]
})
export class PipesModule {
}
