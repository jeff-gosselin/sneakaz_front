const initialState = {
	shopper: {}
}

export const shopperReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'CREATE_NEW_SHOPPER':
			return {...state, shopper: action.payload}

		case 'LOG_IN_SHOPPER':
			return {...state, shopper: action.payload}
		default: return state
	}
}
