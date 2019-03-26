const initialState = {
	shopper: {},
	currentOrder: [],
	orders: []
}

export const shopperReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'START_NEW_ORDER':
			console.log("??????????", action.payload);
			return {...state, orders: [...state.orders, action.payload]}

		case 'LOG_IN_SHOPPER':
				// check order status
				let shopper = action.payload;
				console.log("Logged in shopper:", shopper);
				if(shopper.orders) {
					return {...state, shopper: shopper, orders: shopper.orders, currentOrder: shopper.order_items}
				}

		case 'ADD_TO_ORDER':
			console.log("The item that was added:", action.payload);
			return {...state, currentOrder: [...state.currentOrder, action.payload]}

			// const thePayload = action.payload;
			// console.log("The Payload", thePayload);
			//
			// console.log('the cart', state.currentCart);
			//
			// if(state.currentCart.length === 0) {
			// 	console.log("Amount in cart prior to new addition:", state.currentCart.length);
			// 	return {...state, currentCart: [...state.currentCart, action.payload] }
			// } else {
			// 	let result = state.currentCart.filter(object => object.size === thePayload.size && object.sneaker.id === thePayload.sneaker.id)
			// 	console.log("The result", result);
			//
			// 	result[0].quantity += thePayload.quantity;
			// }

		// case 'ADD_QTY':
		// 	return {...state, quantity: action.payload}

		// case 'REMOVE_FROM_ORDER':
		// 	const firstItemMatch = state.currentOrder.indexOf(action.payload);
		// 	return state.currentOrder.filter((item, index) => index !== firstItemMatch)
		default: return state
	}
}
