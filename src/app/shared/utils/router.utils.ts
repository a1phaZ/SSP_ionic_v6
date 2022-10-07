import {ActivatedRouteSnapshot} from '@angular/router';

export const getInnerParams = (list: ActivatedRouteSnapshot[], param: string) => {
	let result;
	list.forEach((snapshot) => {
		if (snapshot.params[param]) {
			result = snapshot.params[param];
		} else {
			result = snapshot.children.length > 0 ? getInnerParams(snapshot.children, param) : null;
		}
	});

	return result;
};
