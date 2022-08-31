import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-items-bar',
	templateUrl: './items-bar.component.html',
	styleUrls: ['./items-bar.component.scss'],
})
export class ItemsBarComponent implements OnInit {

	@Input()
	items: any[];
	@Input()
	selectedId: number;

	constructor() {
	}

	ngOnInit() {
	}

	changeSelected(id: number) {
		if (this.selectedId === id) {
			return;
		}
		this.selectedId = id;
	}

}
