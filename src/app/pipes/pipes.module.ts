import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InnerHtmlPipe} from './inner-html.pipe';
import {ProgressValuePipe} from './progress-value.pipe';
import {SortIndRatingPipe} from './sort-ind-rating.pipe';
import {DirectionFilterPipe} from './direction-filter.pipe';


@NgModule({
	declarations: [
		InnerHtmlPipe,
		ProgressValuePipe,
		SortIndRatingPipe,
		DirectionFilterPipe
	],
	exports: [
		InnerHtmlPipe,
		ProgressValuePipe,
		SortIndRatingPipe,
		DirectionFilterPipe
	],
	imports: [
		CommonModule
	]
})
export class PipesModule {
}
