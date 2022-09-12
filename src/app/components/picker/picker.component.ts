import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {IonModal, PickerColumnOption, PickerController} from '@ionic/angular';
import {Button} from '../../models/button.model';
import {DomService} from '../../services/dom.service';
import {ButtonsWrapperComponent} from '../buttons-wrapper/buttons-wrapper.component';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {
	changePeriodValue,
	initializePicker,
	nextPeriodValue,
	prevPeriodValue
} from '../../../store/period-picker/period-picker.actions';
import {selectPeriodByButtonId} from '../../../store/period-picker/period-picker.selectors';
import {ARRAY_OF_MONTH_VALUES} from '../../../store/period-picker/period-picker.reducer';

@Component({
	selector: 'app-picker',
	templateUrl: './picker.component.html',
	styleUrls: ['./picker.component.scss'],
})
export class PickerComponent implements OnInit {

	@Input()
	minYear = 2007;
	@Input()
	maxYear!: number;
	@Input()
	periodId = 3;// TODO Убарать этот костыль, так как ни чего не должен знать об id;
	@Input()
	periodValue: number;
	@Input()
	periodYear;
	@Input()
	buttons: Button[];

	@ViewChild(IonModal) modal: IonModal;

	monthValues: any;
	arrayOfMonthValues = ARRAY_OF_MONTH_VALUES;
	arrayOfYears: any[] = [];

	title: string;

	buttonId: number;

	private ngUnsubscribe: Subject<any> = new Subject<any>();

	constructor(
		private pickerCtrl: PickerController,
		private domService: DomService,
		private route: ActivatedRoute,
		private store: Store<IAppState>,
	) {
		this.route
			.params
			.pipe(
				takeUntil(this.ngUnsubscribe)
			)
			.subscribe((data: { buttonId: string }) => {
				this.store.dispatch(initializePicker({buttonId: Number(data.buttonId)}));
				this.buttonId = Number(data.buttonId);
			});
	}

	get _buttons(): Button[] {
		return [...this.buttons] as Button[];
	}

	set _buttons(buttons) {
		this.buttons = [...buttons];

	}

	ngOnInit(): void {
		this.store.select(selectPeriodByButtonId(9))
			.subscribe(data => {
				for (const key of Object.keys(data)) {
					this[key] = data[key];
				}
			});

		this.changePeriodId(this.periodId);
		this.title = this.getTitle();
		this.arrayOfYears = this.fillArray(this.minYear, this.maxYear);
	}

	getTitle(): string {
		const monthValue = this.getValues(this.periodId).find((item) => item.value === this.periodValue);
		if (!monthValue) {
			return this.periodYear.toString();
		}
		return `${monthValue.text} ${this.periodYear}`;
	}

	fillArray(min: number, max: number) {
		const a = [];
		for (let i = min; i <= max; i++) {
			a.push({
				text: i.toString(),
				value: i,
			});
		}
		return a;
	}

	changePeriodId(id) {
		this.periodId = id;
	}

	changePeriodType(id, array = this._buttons) {
		const b = [...array];
		return b.map((item) => ({
			...item,
			isSelected: item.id === id,
		}));
	}

	getValues(periodId: number): PickerColumnOption[] {
		const v = this.arrayOfMonthValues.find(({id}) => id === periodId);
		if (!v) {
			return null;
		}
		return v.values as PickerColumnOption[];
	}

	async openPicker() {
		const monthValues = this.getValues(this.periodId);
		let _periodId = this.periodId;

		const picker = await this.pickerCtrl.create({
			columns: [
				{
					name: 'month',
					selectedIndex: this.periodValue - 1,
					prevSelected: 0,
					options: monthValues,
				},
				{
					name: 'years',
					selectedIndex: this.arrayOfYears.findIndex((item) => item.value === this.periodYear),
					options: this.arrayOfYears,
				}
			],
			cssClass: 'picker__wrapper',
			buttons: [
				{
					text: 'Отмена',
					role: 'cancel',
				},
				{
					text: 'Ок',
					handler: (value) => {
						attached.clickBtn.unsubscribe();

						this.store.dispatch(changePeriodValue({
							buttonId: this.buttonId,
							periodId: _periodId,
							periodValue: value.month ? value.month.value : this.periodValue,
							periodYear: value.years.value,
						}));
						this.title = this.getTitle();
					},
				},
			],
		});

		const _b = this._buttons.map((item) => ({
			...item, isSelected: item.id === this.periodId
		}));

		const attached = this.domService.attachComponent(
			ButtonsWrapperComponent,
			{
				buttons: [..._b],
				clickBtn: new EventEmitter(),
			},
			'picker-wrapper'
		);

		attached.clickBtn.subscribe(id => {
			// this.changePeriodId(id);
			_periodId = id;
			attached.buttons = this.changePeriodType(id, _b);
			const options = this.getValues(id);

			// TODO Убирать колонку месяца если нет значений.

			picker.columns[0] = {
				...picker.columns[0],
				selectedIndex: 0,
				// prevSelected: 0,
				options
			};
			picker.columns = JSON.parse(JSON.stringify(picker.columns));
		});

		await picker.present();
	}

	getIconName(periodId: number) {
		return `custom-${this.buttons.find(({id}) => id === periodId).name}`;
	}

	prevPeriodValue() {
		this.store.dispatch(prevPeriodValue({buttonId: this.buttonId}));

		this.title = this.getTitle();
	}

	nextPeriodValue() {
		this.store.dispatch(nextPeriodValue({buttonId: this.buttonId}));

		this.title = this.getTitle();
	}

	disablePrev(): boolean {
		return this.periodYear === this.minYear && this.periodValue === 1;
	}

	disableNext(): boolean {
		return this.periodYear === this.maxYear && this.periodValue === this.getValues(this.periodId).length;
	}

}
