import {dashboardList} from '../dashboard.const';
import {TOrgSelectItem} from '../../models/organization.model';
import {TDirection} from '../../models/direction.model';

export const getPrimaryTitle = (buttonId: number): string => dashboardList.find(({id}) => id === buttonId)?.name;

export const getSecondaryTitle = (org: TOrgSelectItem): string => org?.title;

export const getTertiaryTitle = (directions: TDirection[], current: number): string => directions.find(({id}) => id === current).title;
