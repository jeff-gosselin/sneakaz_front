const initialState = {
	shopper: {},
	currentCart: [],
	currentOrder: null
}

export const shopperReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'CREATE_NEW_SHOPPER':
			return {...state, shopper: action.payload}

		case 'LOG_IN_SHOPPER':
				// check order status
				let shopper = action.payload;

				if(shopper.orders == undefined) {
					return null
				} else {
					let orders = shopper.orders;
					let shopper_id = shopper.id
					if(orders.length === 0 || orders[orders.length - 1].complete === true) {
						console.log("order status fired", shopper_id);
						return {...state, shopper: action.payload, currentOrder: "new"}
					} else {
						return {...state, shopper: action.payload, currentOrder: orders[orders.length - 1].id}
					}
				}



		// case 'GET_ORDER_ID':
		// 	console.log("The Payload", state.shopper);
		// 	return {...state, order_num: action.payload}

		case 'ADD_TO_CART':
			const thePayload = action.payload;
			console.log("The Payload", thePayload);

			console.log('the cart', state.currentCart);

			if(state.currentCart.length === 0) {
				console.log("Amount in cart prior to new addition:", state.currentCart.length);
				return {...state, currentCart: [...state.currentCart, action.payload] }
			} else {
				let result = state.currentCart.filter(object => object.size === thePayload.size && object.sneaker.id === thePayload.sneaker.id)
				console.log("The result", result);

				result[0].quantity += thePayload.quantity;
			}




		case 'ADD_QTY':
			return {...state, quantity: action.payload}

		case 'REMOVE_FROM_CART':
			const firstItemMatch = state.currentCart.indexOf(action.payload);
			return state.currentCart.filter((item, index) => index !== firstItemMatch)
		default: return state
	}
}
