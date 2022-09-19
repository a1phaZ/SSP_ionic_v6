export const prepareFormData = (obj): FormData => {
	const keys = Object.keys(obj);
	const formData: FormData = new FormData();
	for (const key of keys) {
		// if (keys.hasOwnProperty(key)) {
			formData.append(key, obj[key]);
		// }
	}
	return formData;
};
