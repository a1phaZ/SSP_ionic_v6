import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectComponent} from '../../components/modals/select/select.component';
import {THeaderButtons} from '../../models/button.model';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../services/web-api.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../services/navigation.service';
import {selectCurrentDirection} from '../../../store/directions/directions.selectors';
import {takeUntil} from 'rxjs/operators';
import {selectButtonId} from '../../../store/app.selectors';

@Component({
	selector: 'app-base',
	templateUrl: './base.page.html',
	styleUrls: ['./base.page.scss'],
})
export abstract class BasePage implements OnInit, OnDestroy {

	buttonId: number;
	currentDirection$: Observable<number>;
	headerButtons: THeaderButtons;
	titles: { primary: string; secondary?: string; tertiary?: string } = {primary: ''};

	protected ngUnsubscribe: Subject<any> = new Subject<any>();

	protected constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService,
	) {
		// this.route.params.subscribe((params) => {
		// 	this.buttonId = Number(params.buttonId);
		// });

		this.store.pipe(
			takeUntil(this.ngUnsubscribe),
			select(selectButtonId),
		)
			.subscribe(buttonId => this.buttonId = buttonId);

		this.currentDirection$ = this.store.select(selectCurrentDirection);

	}

	ngOnInit() {
	}

	async selectModalOpen() {
		const modal = await this.modalCtrl.create({
			component: SelectComponent,
			componentProps: {
				buttonId: this.buttonId,
			}
		});
		modal.present();
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	abstract buttonsHandle(button: string);

	abstract initializeHeaderButtons(): THeaderButtons;

	abstract makeRequest(data: any);
}
