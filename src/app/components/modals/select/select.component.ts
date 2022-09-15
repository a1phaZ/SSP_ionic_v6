import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {Observable, of} from 'rxjs';
import {CAvailableOrgsTranslate, TOrgSelectItem} from '../../../models/organization.model';
import {selectOrganizationsByButton} from '../../../../store/organizations/organizations.selectors';
import {chooseOrg} from '../../../../store/organizations/organizations.actions';
import {dashboardList} from '../../../shared/dashboard.const';
import {mergeMap, tap} from 'rxjs/operators';
import {TDashboardItem} from '../../../models/dashboard.model';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {

	list$: Observable<TOrgSelectItem[]>;
	buttonId: number;
	button: TDashboardItem;
	selectedId: number;

	constructor(
		private modalCtrl: ModalController,
		private store: Store<IAppState>,
	) {

	}

	ngOnInit() {
		this.button = dashboardList.find(({id}) => id === this.buttonId);

		this.list$ = this.store.select(selectOrganizationsByButton(this.buttonId))
			.pipe(
				tap(console.log),
				mergeMap((list) => {
					const childsList = getChild(list, list);
					const activeParentOrg = childsList.find(({isActive}) => isActive);
					this.selectedId =
						activeParentOrg.orgType === 1 ?
							this.button.availableTypes.find((item) => item.order === 1)?.id :
							activeParentOrg.orgType;
					return of(childsList);
				})
			);

		this.store.subscribe(console.log);
	}

	async closeModal() {
		await this.modalCtrl.dismiss();
	}

	async selectItem($event: any) {
		console.log($event);
		this.store.dispatch(chooseOrg({buttonId: this.buttonId, org: $event}));
		await this.modalCtrl.dismiss();
	}

	changeBar(id) {
		this.selectedId = id;
	}
}

const getChild = (list: TOrgSelectItem[], primaryList: TOrgSelectItem[]): TOrgSelectItem[] => {
	const newList = [];
	for (const item of list) {
		const childList = primaryList.filter(({
			                                      parentId,
			                                      parentOrgType
		                                      }) => (parentId === item.id && parentOrgType === item.orgType));
		let childs = getChild(childList, primaryList);
		if (childs.length <= 1) {
			childs = [];
		} else {
			childs = [{
				...item,
				summary: true,
				title: `Все ${CAvailableOrgsTranslate[item.orgType]}`,
				childs: []
			}, ...childs];
		}
		newList.push({
			...item,
			childs
		});
	}
	return newList;
};
