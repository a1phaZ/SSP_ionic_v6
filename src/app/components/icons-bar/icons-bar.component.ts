import {Component, Input, OnInit} from '@angular/core';
import {ItemsBarComponent} from '../base/items-bar/items-bar.component';
import {TIconBar} from '../../models/bars.model';

@Component({
	selector: 'app-icons-bar',
	templateUrl: './icons-bar.component.html',
	styleUrls: ['../base/items-bar/items-bar.component.scss', './icons-bar.component.scss'],
})
export class IconsBarComponent extends ItemsBarComponent implements OnInit {

	@Input()
	items: TIconBar[];

	constructor() {
		super();
	}

	ngOnInit() {
	}

}
