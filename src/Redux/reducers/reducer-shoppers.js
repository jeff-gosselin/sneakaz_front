const initialState = {
	shopper: {},
	currentOrder: [],
	orders: [],
	login: ""
}

export const shopperReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'START_NEW_ORDER':
			console.log("??????????", action.payload);
			return {...state, currentOrder: [], orders: [...state.orders, action.payload]}

		case 'LOG_IN_SHOPPER':
				// check order status
				let shopper = action.payload;
				console.log("Logged in shopper:", shopper);
				if(shopper.orders.length > 0) {
					const currentOrder = shopper.orders.filter(order => order.shopper_id === shopper.id && order.complete === false);
					const currentOrderNumber = currentOrder[0].id;
					const itemsInCart = shopper.order_items.filter(item => item.order_id === currentOrderNumber);
					console.log("Current items in cart: ", itemsInCart);
					return {...state, shopper: shopper, orders: shopper.orders, currentOrder: itemsInCart}
				}

				if(shopper.orders) {
					return {...state, shopper: shopper, orders: shopper.orders, currentOrder: shopper.order_items}
				}

		case 'LOG_IN_FAILED':
				console.log("Login Attempt:", action.payload);
				
				return {...state, login: action.payload}

		case 'ADD_TO_ORDER':
			console.log("The item that was added:", action.payload);
			return {...state, currentOrder: [...state.currentOrder, action.payload]}

		case 'REMOVE_FROM_ORDER':
			const deletedItem = action.payload;
			const order = state.currentOrder;
			const orderWithDeletion = order.filter(item => item.id !== deletedItem.id);
			console.log("deletedItem", deletedItem);
			console.log("order", order);
			console.log("orderWithDeletion", orderWithDeletion);
			return {...state, currentOrder: orderWithDeletion}



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
