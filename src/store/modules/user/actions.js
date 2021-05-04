export function getUser(name) {
	return {
		type: '@user/USER_NAME',
		payload: { name },
	};
}
