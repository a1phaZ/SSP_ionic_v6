import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

	@Output()
	changeSelected: EventEmitter<number> = new EventEmitter<number>();

	constructor() {
	}

	ngOnInit() {
	}

	onChangeSelected(id: number) {
		if (this.selectedId === id) {
			return;
		}
		// this.selectedId = id;
		this.changeSelected.emit(id);
	}

}
