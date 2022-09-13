export const getErrorMessage = (e: any): string => {
	if (e?.error?.type === 'timeout') {
		return 'Первышено время ожидания ответа от сервера';
	}
	return 'Неизвестная ошибка';
};
