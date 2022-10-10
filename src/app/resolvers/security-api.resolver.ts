import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {getInnerParams} from '../shared/utils/router.utils';

@Injectable({
	providedIn: 'root'
})
export class SecurityApiResolver implements Resolve<Observable<any>> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<any>> |
		Promise<Observable<any>> |
		Observable<any> {
		return of(API_METHOD[getInnerParams(state.root.children, 'security')]);
	}
}

const API_METHOD = {
	polygraph: {
		rating: {
			getPoly: true
		},
		dynamic: {
			getPolyRating: true
		},
		detail: {
			getPolyIndicatorDetail: true,
		}
	},
	barrier: {
		rating: {
			getBarier: true
		},
		dynamic: {
			getBarierRating: true
		},
		detail: {
			getBarierIndicatorDetail: true
		}
	},
	safety: {
		rating: {
			getSafetyOfGoodsAndMaterials: true
		},
		dynamic: {
			getSafetyOfGoodsAndMaterialsRating: true
		},
	},
	null: null
};
