import {Component, Input} from '@angular/core';
import {AccordionItemComponent} from '../accordion-item/accordion-item.component';
import {TAccordionItemFieldTypeLink, TAccordionItemTypeData} from '../../../../models/accordion.model';

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

	getFileExtension(field: TAccordionItemFieldTypeLink) {
		const _split = field.field_value.path.split('.');
		return _split ? _split[_split.length - 1] : '';
	}
}
