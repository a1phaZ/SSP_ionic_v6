import {NgModule} from '@angular/core';
import {AccordionItemComponent} from './accordion-item/accordion-item.component';
import {CommonModule} from '@angular/common';
import {LogoModule} from '../logo/logo.module';
import {IconModule} from '../icon/icon.module';
import {AccordionComponent} from './accordion.component';
import {AccordionItemFolderComponent} from './accordion-item-folder/accordion-item-folder.component';
import {AccordionItemTypeDataComponent} from './accordion-item-type-data/accordion-item-type-data.component';

@NgModule({
	declarations: [
		AccordionComponent,
		AccordionItemComponent,
		AccordionItemFolderComponent,
		AccordionItemTypeDataComponent
	],
	imports: [
		CommonModule,
		LogoModule,
		IconModule,
	],
	exports: [
		AccordionComponent,
		AccordionItemComponent,
		AccordionItemFolderComponent,
		AccordionItemTypeDataComponent
	]
})
export class AccordionModule {
}
