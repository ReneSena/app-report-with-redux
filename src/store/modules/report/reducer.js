const INITIAL_STATE = {
	list: [],
};

export function report(state = INITIAL_STATE, action) {
	switch (action.type) {
		case '@report/LOADER_REPORT':
			return {
				...state,
				list: action.payload.list,
			};

		default:
			return state;
	}
}
