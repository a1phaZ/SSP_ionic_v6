import {Component, Input} from '@angular/core';
import {AccordionItemComponent} from '../accordion-item/accordion-item.component';
import {TAccordionItemTypeData} from '../../../../models/accordion.model';

@Component({
	selector: 'app-accordion-item-type-data',
	templateUrl: './accordion-item-type-data.component.html',
	styleUrls: ['../accordion-item/accordion-item.component.scss','./accordion-item-type-data.component.scss'],
})
export class AccordionItemTypeDataComponent extends AccordionItemComponent {

	@Input()
	item: TAccordionItemTypeData;

	constructor() {
		super();
	}

}
