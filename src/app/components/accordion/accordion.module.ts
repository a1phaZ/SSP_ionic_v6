import {NgModule} from '@angular/core';
import {AccordionItemComponent} from './accordion-item/accordion-item.component';
import {CommonModule} from '@angular/common';
import {LogoModule} from '../app/logo/logo.module';

@NgModule({
	declarations: [AccordionItemComponent],
	imports: [
		CommonModule,
		LogoModule,
	],
	exports: [AccordionItemComponent]
})
export class AccordionModule {
}
