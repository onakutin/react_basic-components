export default function reducer(state, action) {
	console.log(action);

	switch (action.type) {
		case "currency/set":
			return {
				...state,
				currency: action.payload,
			};
		case "exchangeRate/set":
			return {
				...state,
				exchangeRate: action.payload,
			};
		case "user/set":
			return {
				...state,
				user: action.payload,
			};
		case "currentPage/set":
			return {
				...state,
				currentPage: action.payload,
			};
		case "cart/addItem":
			return {
				...state,
				shoppingCart: state.shoppingCart.push(action.payload),
			};
	}

	return state;
}
