import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements AfterViewInit {
	@Input()
	name: string;

	constructor() {
	}


	ngAfterViewInit(): void {
	}

}
