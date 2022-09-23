import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DetailsService} from '../../services/details.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {selectDetails} from '../../../store/details/details.selectors';
import {TIndicatorDetails} from '../../models/indicator.model';

@Component({
  selector: 'app-indicator-calculation',
  templateUrl: './indicator-calculation.page.html',
  styleUrls: ['./indicator-calculation.page.scss'],
})
export class IndicatorCalculationPage implements OnInit {

	details: TIndicatorDetails;

	constructor(
	  public router: Router,
	  public detailsService: DetailsService,
	  private store: Store<IAppState>,
	  private appRef: ApplicationRef,
  ) {
	  this.store.select(selectDetails).subscribe((details) => {
		  this.details = details;
		  this.appRef.tick();
	  });
  }

  ngOnInit() {
  }

}
