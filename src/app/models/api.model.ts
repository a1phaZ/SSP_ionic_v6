export enum ApiModel {
	getAppUrl = '/api/utility/getAppUrl',

//  Auth
	checkToken = '/auth/checkToken',
	authByLoginPass = '/auth/authByLoginPass',
	pin = '/auth/login/',

	//Indicators
	getIndList = '/api/indicators/getIndList/',
	getIndicatorDetails = '/api/indicators/getFullValues/',
	getIndicatorRating = '/api/indicators/getRating/',
	getIndicatorDynamics = '/api/indicators/getIndDiaByPeriod/'
}
