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

	constructor(
		private logoService: LogoService
	) {
	}

	ngAfterViewInit(): void {
		this.setLogo();
	}

	setLogo() {
		this.itemLogo.nativeElement.innerHTML = this.logoService.logoList[this.logo] || this.logoService.primaryLogo;
	}

}
