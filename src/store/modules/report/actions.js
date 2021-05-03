export function updateReport() {
	return {
		type: '@report/UPDATE_REPORT',
	};
}

export function loaderReport(list) {
	return {
		type: '@report/LOADER_REPORT',
		payload: { list },
	};
}
