import {NgModule} from '@angular/core';
import {AccordionItemComponent} from './accordion-item/accordion-item.component';
import {CommonModule} from '@angular/common';
import {LogoModule} from '../logo/logo.module';
import {IconModule} from '../icon/icon.module';
import {AccordionComponent} from './accordion.component';

@NgModule({
	declarations: [AccordionComponent, AccordionItemComponent],
	imports: [
		CommonModule,
		LogoModule,
		IconModule,
	],
	exports: [AccordionComponent, AccordionItemComponent]
})
export class AccordionModule {
}