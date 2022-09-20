import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DetailsService} from '../../services/details.service';

@Component({
	selector: 'app-indicator-details',
	templateUrl: './indicator-details.page.html',
	styleUrls: ['./indicator-details.page.scss'],
})
export class IndicatorDetailsPage implements OnInit {
	constructor(
		public router: Router,
		public detailsService: DetailsService,
	) {
	}

	ngOnInit() {

	}
}
