import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InnerHtmlPipe} from './inner-html.pipe';
import { ProgressValuePipe } from './progress-value.pipe';


@NgModule({
	declarations: [
		InnerHtmlPipe,
  ProgressValuePipe
	],
	exports: [
		InnerHtmlPipe,
		ProgressValuePipe
	],
	imports: [
		CommonModule
	]
})
export class PipesModule {
}
