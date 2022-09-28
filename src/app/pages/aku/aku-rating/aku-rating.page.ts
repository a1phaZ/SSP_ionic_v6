import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {WebApiService} from '../../../services/web-api.service';
import {ApiModel} from '../../../models/api.model';

@Component({
  selector: 'app-aku-rating',
  templateUrl: './aku-rating.page.html',
  styleUrls: ['./aku-rating.page.scss'],
})
export class AkuRatingPage implements OnInit {

	chartData: any;
	private ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(
	  private route: ActivatedRoute,
	  private webApi: WebApiService
  ) {
	this.route.params.pipe(
		takeUntil(this.ngUnsubscribe),
		switchMap(({directionId}) => this.makeRequest({
			inOutDia: true,
			user: 1362,
			direction_id: directionId
		}))
	).subscribe(response => this.chartData = response);
  }

  ngOnInit() {
  }

  makeRequest(data) {
	  return this.webApi
		  .get$(ApiModel.aku, data);
  }

}
