import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InnerHtmlPipe} from './inner-html.pipe';


@NgModule({
	declarations: [
		InnerHtmlPipe
	],
	exports: [
		InnerHtmlPipe
	],
	imports: [
		CommonModule
	]
})
export class PipesModule {
}
