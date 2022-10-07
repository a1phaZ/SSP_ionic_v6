import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BasePage} from '../../base/base.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {IndicatorsService} from '../../../services/indicators.service';
import {ModalController} from '@ionic/angular';
import {CrisisService} from '../../../services/crisis.service';
import {NavigationService} from '../../../services/navigation.service';
import {THeaderButtons} from '../../../models/button.model';
import {ApiModel} from '../../../models/api.model';
import {mergeMap, takeUntil} from 'rxjs/operators';
import {of} from 'rxjs';
import {selectCurrentOrg, selectOrgById} from '../../../../store/organizations/organizations.selectors';
import {TTableColumn, TTableRow} from '../../../models/table.model';
import {selectSecurityRatingState} from '../../../../store/app.selectors';
import {chooseOrgById} from '../../../../store/organizations/organizations.actions';

@Component({
	selector: 'app-security-rating',
	templateUrl: './security-rating.page.html',
	styleUrls: ['./security-rating.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityRatingPage extends BasePage implements OnInit, OnDestroy {

	tableColumns: TTableColumn[];
	tableRows: TTableRow[];

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public indicatorService: IndicatorsService,
		public modalCtrl: ModalController,
		public crisisService: CrisisService,
		public navigation: NavigationService,
		private cdr: ChangeDetectorRef,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
		// this.currentDirection$.subscribe(direction => this.direction = direction);
	}

	ngOnInit() {
		this.store.pipe(
			select(selectSecurityRatingState),
			takeUntil(this.ngUnsubscribe),
			mergeMap((data) => {
					if (!data) {
						return of({content: [], header: []});
					}
					return this.makeRequest({
						user: 1362,
						getPoly: true,
						...data
					});
				}
			),
		).subscribe((r: { content: any[]; header: string[] }) => {
			if (!r) {
				return;
			}
			this.tableColumns = this.getTableColumns(r.header);
			this.tableRows = this.getTableRows(r.content);
			this.cdr.detectChanges();
		});
	}

	buttonsHandle(button: string) {
	}

	initializeHeaderButtons(): THeaderButtons {
		return undefined;
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.security, data);
	}

	onRowClick($event: any) {
		this.store.dispatch(chooseOrgById({buttonId: this.buttonId, id: $event.id}));
		this.router.navigate([this.navigation.lastUrl, 'detail', $event.id]);
	}

	protected getTableColumns(header: any): TTableColumn[] {
		return header.map((title, idx) => ({
			title,
			name: idx.toString()
		}));
	}

	protected getTableRows(content: { rowId: number; colorIndicator: number; values: any[] }[]): TTableRow[] {
		return content.map((row) => ({
			id: row.rowId,
			name: row.values[0],
			data: [{value: row.values[1]}]
		}));
	}
}
