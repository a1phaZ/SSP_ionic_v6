import {Component, Input} from '@angular/core';
import {AccordionItemComponent} from '../accordion-item/accordion-item.component';
import {TAccordionItemFolder} from '../../../../models/accordion.model';

@Component({
	selector: 'app-accordion-item-folder',
	templateUrl: './accordion-item-folder.component.html',
	styleUrls: ['../accordion-item/accordion-item.component.scss','./accordion-item-folder.component.scss'],
})
export class AccordionItemFolderComponent extends AccordionItemComponent {

	@Input()
	item: TAccordionItemFolder;

	constructor() {
		super();
	}

}
