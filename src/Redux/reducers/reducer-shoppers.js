const initialState = {
	shopper: {},
	currentCart: []
}

export const shopperReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'CREATE_NEW_SHOPPER':
			return {...state, shopper: action.payload}

		case 'LOG_IN_SHOPPER':
			return {...state, shopper: action.payload}

		case 'ADD_TO_CART':
			return {...state, currentCart: [...state.currentCart, action.payload]}

		case 'REMOVE_FROM_CART':
			const firstItemMatch = state.currentCart.indexOf(action.payload);
			return state.currentCart.filter((item, index) => index !== firstItemMatch)
		default: return state
	}
}
