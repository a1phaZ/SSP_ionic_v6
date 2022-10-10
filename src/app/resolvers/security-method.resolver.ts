import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {getInnerParams} from '../shared/utils/router.utils';

@Injectable({
	providedIn: 'root'
})
export class SecurityMethodResolver implements Resolve<Observable<any>> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<any>> |
		Promise<Observable<any>> |
		Observable<any> {
		return of(METHOD[getInnerParams(state.root.children, 'security')]);
	}
}

const METHOD = {
	polygraph: {
		sectionHorizontalTitle: 'Зоны рисков',
		sectionVerticalTitle: 'Категории рисков',
		isDescr: true,
		isHeaderContent: true,
		data: [
			{
				termin: 'Категория A',
				condition: 'без рисков для Компании',
				descr: 'Негативной информации не получено. Мотивация устойчивая'
			},
			{
				termin: 'Категория B',
				condition: 'косвенный риск для Компании',
				descr:
					'Незначительные и однократные нарушения (получение «чаевых» в суммах не более 10 000 рублей,' +
					' использование инструмента в личных целях, занятие личными делами и т.п.). Из личной корыстной ' +
					'заинтересованности: факт умышленного предоставления клиенту скидок, внесение недостоверной ' +
					'информацию в базы данных или в отчеты из личной, осведомленность о допущенных нарушениях другими ' +
					'сотрудниками Компании, передача сторонним лицам сведений о выгодных вариантах продаваемых ' +
					'автомобилей в ущерб интересам Компании. Без корыстной заинтересованности: нарушения действующих ' +
					'нормативных документов Компании. Деятельное раскаяние в содеянном, путем изложения всех фактов.          '
			},
			{
				termin: 'Категория C',
				condition: 'прямой риск и угроза для Компании',
				descr:
					'Сокрытие наличия судимости, неустойчивая мотивация трудоустройства, злоупотребление алкоголем, ' +
					'неоднократное употребление наркотических веществ, разглашение коммерческой тайны/конфиденциальной ' +
					'информации в корыстных целях. неоднократность и системность получения незаконных денежных средств ' +
					'более 10 000 рублей, участие или организация группы для совершения нарушений с целью личной ' +
					'наживы и выгоды, а также в интересах третьих лиц, наличие у проверяемого понимания умысла ' +
					'причинения своими действиями ущерба интересам Компании, оказание любого противодействия ' +
					'специалисту при тестировании, отказ от прохождения первичного либо последующего тестирования ' +
					'без указания объективных причин.'
			}
		]
	},
	barrier: {
		sectionHorizontalTitle: 'Зоны рисков',
		sectionVerticalTitle: 'Категории рисков',
		isDescr: true,
		isHeaderContent: false,
		data: [
			{
				termin: '1 категория',
				condition: '2 и более',
				color: 'orange-dark',
				descr:
					'Выпуск авто без пропуска либо по поддельному пропуску. Выдача метки на тестовый а/м без ' +
					'подтверждающих документов. Выпуск товарного авто без проверки VIN–кода.'
			},
			{
				termin: '2 категория',
				condition: '5 и более',
				descr:
					'Вынос/вывоз ТМЦ без разрешительных. Проникновение в товарный/клиентский автомобиль. Не принятие  ' +
					'сотрудником ДЦ мер к "нарушителю"'
			},
			{
				termin: '3 категория',
				condition: '7 и более',
				color: 'green-dark',
				descr:
					'Проникновение "нарушителя" в служебные помещения ДЦ. Проникновение "нарушителя" на склад товарных ' +
					'авто. Бесконтрольное нахождение "нарушителя" на складе товарных авто.'
			},
		]
	},
	safety: {
		sectionHorizontalTitle: 'Зоны рисков',
		sectionVerticalTitle: 'Категории рисков',
		sectionDescription: 'Данный раздел отражает работу сотрудников отдела внешней безопасности СКБ по проверке ' +
			'соблюдения на ДЦ СОП по организации рабочего места с использованием 5С и нацелены на выявление на рабочих' +
			' местах автомехаников и складах ОЗЧ неучтенных ТМЦ для их оприходования и использования в производственных ' +
			'процессах. Что в свою очередь минимизирует риски кражи запасных частей, ГСМ и технических жидкостей, ' +
			'а также их использования автомеханиками для производства работ на автомобилях клиентов без оплаты в кассу ДЦ.',
		isDescr: false,
		isHeaderContent: true,
		data: [
			{
				termin: '1 категория',
				condition: 'Неучтенных ТМЦ нет',
			},
			{
				termin: '2 категория',
				condition: 'Менее 10 000 руб.',
			},
			{
				termin: '3 категория',
				condition: '10 000 руб. и более',
			}
		]
	},
	null: null
};
