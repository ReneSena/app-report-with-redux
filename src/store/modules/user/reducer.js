const INITIAL_STATE = {
	name: '',
};

export function user(state = INITIAL_STATE, action) {
	switch (action.type) {
		case '@user/USER_NAME':
			return {
				...state,
				name: action.payload.name,
			};
		default:
			return state;
	}
}
