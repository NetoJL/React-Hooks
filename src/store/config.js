export const initialState = {
	cart: [],
	products: [],
	user: null,
	number: 0,
};

export function reducer(state, action) {
	switch (action.type) {
		case "number_add2":
			return { ...state, number: state.number + 2 };
		case "login":
			return { ...state, user: { name: action.payload } };
		case "number_multiply7":
			return { ...state, number: state.number * 7 };
		case "number_divide25":
			return { ...state, number: parseInt(state.number / 25) };
		case "number_userAdd":
			return {
				...state,
				number: state.number + action.payload,
			};
		default:
			return state;
	}
}