import {Component, Input} from '@angular/core';
import {TAccordionItem} from '../../../../models/accordion.model';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent {

	@Input()
	item: TAccordionItem;

	isOpen = false;

	constructor() {
	}

	toggleItem() {
		this.isOpen = !this.isOpen;
	}
}
