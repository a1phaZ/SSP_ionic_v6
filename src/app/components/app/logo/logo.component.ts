import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {LogoService} from '../../../services/logo.service';

@Component({
	selector: 'app-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements AfterViewInit {

	@ViewChild('itemLogo') itemLogo: ElementRef;

	@Input()
	logo: string;
	@Input()
	size = 32;

	constructor(
		private logoService: LogoService
	) {
	}

	ngAfterViewInit(): void {
		this.setLogo();
	}

	setLogo() {
		// const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		console.log(this.logoService.logoList[this.logo]);
		this.itemLogo.nativeElement.innerHTML = this.removeAttr(this.logoService.logoList[this.logo] || this.logoService.primaryLogo);
	}

	removeAttr(svg: string) {
		return svg.replace(/width="\w*"/, '').replace(/height="\w*"/, '');
	}

}
