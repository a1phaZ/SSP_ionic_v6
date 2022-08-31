import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {IonModal, PickerColumnOption, PickerController} from '@ionic/angular';
import {Button} from '../../models/button.model';
import {DomService} from '../../services/dom.service';
import {ButtonsWrapperComponent} from '../buttons-wrapper/buttons-wrapper.component';

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
	arrayOfMonthValues = [
		{
			id: 3,
			values: [
				{
					text: 'Январь',
					value: 1,
				},
				{
					text: 'Февраль',
					value: 2,
				},
				{
					text: 'Март',
					value: 3,
				},
				{
					text: 'Апрель',
					value: 4,
				},
				{
					text: 'Май',
					value: 5,
				},
				{
					text: 'Июнь',
					value: 6,
				},
				{
					text: 'Июль',
					value: 7,
				},
				{
					text: 'Август',
					value: 8,
				},
				{
					text: 'Сентябрь',
					value: 9,
				},
				{
					text: 'Октябрь',
					value: 10,
				},
				{
					text: 'Ноябрь',
					value: 11,
				},
				{
					text: 'Декабрь',
					value: 12,
				},
			]
		},
		{
			id: 4,
			values: [
				{
					text: '1-ый квартал',
					value: 1,
				},
				{
					text: '2-ой квартал',
					value: 2,
				},
				{
					text: '3-ий квартал',
					value: 3,
				},
				{
					text: '4-ый квартал',
					value: 4,
				},
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },

			]
		},
		{
			id: 5,
			values: [
				{
					text: '1-ое полугодие',
					value: 1,
				},
				{
					text: '2-ое полугодие',
					value: 2,
				},
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },

			]
		},
		{
			id: 6,
			values: [
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
				{ value: -1, text: '', disabled: true },
			]
		}
	];
	arrayOfYears: any[] = [];

	title: string;

	constructor(private pickerCtrl: PickerController, private domService: DomService) {

	}

	get _buttons(): Button[] {
		return [...this.buttons] as Button[];
	}

	set _buttons(buttons) {
		this.buttons = [...buttons];

	}

	ngOnInit(): void {
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
						this.changePeriodId(_periodId);
						attached.clickBtn.unsubscribe();
						this._buttons = this.changePeriodType(this.periodId);
						this.periodValue = value.month ? value.month.value : this.periodValue;
						this.periodYear = value.years.value;
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
		const v = this.getValues(this.periodId);
		if (this.periodValue > 1) {
			this.periodValue -= 1;
		} else {
			this.periodValue = v.length;
			this.periodYear -= 1;
		}
		this.title = this.getTitle();
	}

	nextPeriodValue() {
		const v = this.getValues(this.periodId);
		if (this.periodValue < v.length) {
			this.periodValue += 1;
		} else {
			this.periodValue = 1;
			this.periodYear += 1;
		}
		this.title = this.getTitle();
	}

	disablePrev(): boolean {
		return this.periodYear === this.minYear && this.periodValue === 1;
	}

	disableNext(): boolean {
		return this.periodYear === this.maxYear && this.periodValue === this.getValues(this.periodId).length;
	}

}
