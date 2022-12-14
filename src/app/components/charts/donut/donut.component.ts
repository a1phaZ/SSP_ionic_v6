import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-donut',
	template: `
		<div class="donut__wrapper">
			<svg height="76px" width="76px" [attr.viewBox]="viewBox">
				<g>
					<circle *ngFor="let item of items;let i=index" [attr.cx]="center"
							[attr.cy]="center" [attr.r]="radius" fill="transparent" [attr.stroke-width]="width"
							[attr.stroke-dasharray]="perimeter" [attr.stroke-dashoffset]="getOffset(i)"
							[attr.stroke]="item.color"/>
				</g>
				<g *ngIf="centerText">
					<text [attr.fill]="fontColor" [attr.font-size]="fontSize" text-anchor="middle" [attr.x]="center"
						  [attr.y]="center+fontSize/3">
						{{centerText}}
						<!--                    <tspan [attr.x]="center" dy="0">{{centerText.name}}</tspan>-->
						<!--                    <tspan [attr.x]="center+center" [attr.dy]="fontSize"></tspan>-->
					</text>
				</g>
			</svg>
		</div>
		`,
	styleUrls: ['./donut.component.scss'],
})
export class DonutComponent {
	@Input() items: Array<Item> = [];
	@Input() radius = 50;
	@Input() width = 5;
	@Input() centerText: string;
	@Input() fontColor = 'black';
	@Input() fontSize = 22;

	constructor() {
	}

	get perimeter() {
		return Math.PI * 2 * this.radius;
	}

	get total() {
		return this.items.map(a => a.count).reduce((x, y) => x + y);
	}

	get center() {
		return this.radius + (this.width / 2);
	}

	get viewBox() {
		return '0 0 ' + (this.center * 2).toString() + ' ' + (this.center * 2).toString();
	}

	getOffset(index: number): number {

		const percent: number = index === 0 ? index : this.items.slice(0, index).map(a => a.count).reduce((x, y) => x + y);
		return this.perimeter * percent / this.total;

	}
}

interface Item {
	name: string;
	count: number;
	color: string;
}
