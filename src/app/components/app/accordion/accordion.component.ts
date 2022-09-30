import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TAccordionDataItem} from '../../../models/accordion.model';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {

	@Input()
	list: TAccordionDataItem[];

	@Output()
	openItem: EventEmitter<any> = new EventEmitter<any>();

	constructor() {
	}

}
