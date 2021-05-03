const INITIAL_STATE = {
	total: 20,
	list: [],
};

export function report(state = INITIAL_STATE, action) {
	switch (action.type) {
		case '@report/UPDATE_REPORT':
			return {
				...state,
				total: state.total + 80,
			};

		case '@report/LOADER_REPORT':
			return {
				...state,
				list: action.payload.list,
			};

		default:
			return state;
	}
}
