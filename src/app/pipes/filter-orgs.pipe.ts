import {Pipe, PipeTransform} from '@angular/core';
import {EAvailableOrgs, TOrgSelectItem} from '../models/organization.model';

@Pipe({
	name: 'filterOrgs'
})
export class FilterOrgsPipe implements PipeTransform {

	transform(value: TOrgSelectItem[], typeId: number): TOrgSelectItem[] {
		const holding = value.find(({orgType}) => orgType === EAvailableOrgs.autoholding );
		return [holding, ...value.filter(({orgType, parentId}) => orgType === typeId && !parentId)];
	}

}
