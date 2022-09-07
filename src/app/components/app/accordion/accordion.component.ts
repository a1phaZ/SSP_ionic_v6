import {Component, Input} from '@angular/core';
import {TAccordionItem} from '../../../models/accordion.model';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {

	@Input()
	list: TAccordionItem[];

	constructor() {
	}

}
