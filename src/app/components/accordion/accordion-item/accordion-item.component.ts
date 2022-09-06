import {Component} from '@angular/core';
import {TAccordionItem} from '../../../models/accordion.model';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent {

	// @Input()
	item: TAccordionItem = {
		id: 1,
		city: 'Адыгея',
		name: 'Адыгея',
		thumb: '/functions/s3Files.php?filename=ssp/posessions/gallery_5fdf6da2442d31608478114_thumb.jpg',
		objectName: 'Mercedes_Land Rover_Jaguar Конгрессная 6',
		square: '3234,2 кв.м.',
		year: 2015,
		objectType: 'Построен ГК',
		status: 'Действующий',
		logo: [
			'jlr',
			'mercedes'
		]
	};

	isOpen: boolean;

	constructor() {
	}

}
