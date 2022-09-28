import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {ApiModel} from '../../../models/api.model';
import {NavigationService} from '../../../services/navigation.service';

@Component({
	selector: 'app-aku-crisis',
	templateUrl: './aku-crisis.page.html',
	styleUrls: ['./aku-crisis.page.scss'],
})
export class AkuCrisisPage implements OnInit {
	in: number;
	out: number;
	now: number;
	period: string;
	directionId: number;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private webApi: WebApiService,
		private navigation: NavigationService
	) {
		this.directionId = this.route.snapshot.data.directionId;
	}

	ngOnInit() {
		this.makeRequest({
			state: true,
			user: 1362,
			direction_id: this.directionId
		}).subscribe((response: { state: { in: number; out: number; now: number; period: string } }) => {
			this.in = response.state.in;
			this.out = response.state.out;
			this.now = response.state.now;
			this.period = response.state.period;
		});
	}

	makeRequest(data) {
		return this.webApi
			.get$(ApiModel.aku, data);
	}

	onDynamicClick(id: number) {
		this.router.navigate([this.navigation.lastUrl, id]);
	}

}
