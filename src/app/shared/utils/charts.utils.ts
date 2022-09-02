import {TProgress} from '../../models/progress.model';
import {Colors} from '../../models/colors.model';

export const getColor: any = (str: TProgress) => Colors[`status-${str}`];
