import {NgModule} from '@angular/core';
import {DonutComponent} from './donut/donut.component';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [DonutComponent],
	imports: [
		CommonModule
	],
	exports: [DonutComponent]
})
export class ChartsModule {}
