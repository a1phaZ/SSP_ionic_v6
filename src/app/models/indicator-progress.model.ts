import {TProgress} from './progress.model';

export type TIndicatorProgress = {
	id: number;
	name: string;
	place: string;
	position: string;
	progressStatus: TProgress;
	progressValue: number;
	unit: string;
	value: string;
};
