import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TAccordionDataItem, TAccordionItemFolder, TAccordionItemTypeData} from '../../../../models/accordion.model';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent {

	@Input()
	item: TAccordionDataItem | TAccordionItemFolder | TAccordionItemTypeData;

	@Output()
	openItem: EventEmitter<any> = new EventEmitter<any>();

	isOpen = false;

	constructor() {
	}

	toggleItem() {
		this.isOpen = !this.isOpen;
	}
}
