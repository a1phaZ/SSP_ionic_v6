import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InnerHtmlPipe} from './inner-html.pipe';
import {ProgressValuePipe} from './progress-value.pipe';
import {SortIndRatingPipe} from './sort-ind-rating.pipe';


@NgModule({
	declarations: [
		InnerHtmlPipe,
		ProgressValuePipe,
		SortIndRatingPipe
	],
	exports: [
		InnerHtmlPipe,
		ProgressValuePipe,
		SortIndRatingPipe
	],
	imports: [
		CommonModule
	]
})
export class PipesModule {
}
