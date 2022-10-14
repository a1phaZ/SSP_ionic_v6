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
	getIndicatorDynamics = '/api/indicators/getIndDiaByPeriod/',

	//distributor rating
	distributorRating = '/backbone/distributor/ajax.php',

	//AKU
	aku = '/backbone/mobileApp/aku.php',

	//possessions
	possessions = '/backbone/possesions/ajax.php',

	//security
	security = '/backbone/security-service/ajax.php',

	//qualification
	qualification = '/backbone/mobileApp/qualification.php'
}
