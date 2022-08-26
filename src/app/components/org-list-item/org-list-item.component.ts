import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ItemComponent} from '../list/item/item.component';
import {TOrgSelectItem} from '../../models/organization.model';
import {LogoService} from '../../services/logo.service';

@Component({
	selector: 'app-org-list-item',
	templateUrl: './org-list-item.component.html',
	styleUrls: ['./org-list-item.component.scss'],
})
export class OrgListItemComponent extends ItemComponent implements AfterViewInit {

	@ViewChild('itemLogo') itemLogo: ElementRef;

	@Input()
	item: TOrgSelectItem;

	@Input()
	active: boolean;

	constructor(private logoService: LogoService) {
		super();
	}

	ngAfterViewInit(): void {
		this.setLogo();
	}

	setLogo() {
		this.itemLogo.nativeElement.innerHTML = this.logoService.logoList[this.item.logo] || this.logoService.primaryLogo;
	}


}
