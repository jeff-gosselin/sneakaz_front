const removeFromCart = (deletedItem) => ({
	type: 'REMOVE_FROM_ORDER',
	payload: deletedItem
})

const loginTheShopper = (shopperObj) => ({
	type: 'LOG_IN_SHOPPER',
	payload: shopperObj
})


const startNewOrder = (order) => ({
	type: 'START_NEW_ORDER',
	payload: order
})

const addItemToOrder = (item) => ({
	type: 'ADD_TO_ORDER',
	payload: item
})

export const postNewShopper = (username, password, email) => {
	console.log("username:", username, "password:", password, "email", email);
	return (dispatch) => {
		return fetch('http://localhost:3000/api/v1/shoppers', {
			method: "POST",
			body: JSON.stringify({
				shopper: {username: username, password: password, email: email}}),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}

		})
		.then(response => response.json())
		.then(data => {
				console.log("New Shopper:", data);
        localStorage.setItem("token", data.jwt);
				return dispatch(loginTheShopper(data.shopper))
      })
		.catch(error => console.log("err", error));



	}
}

export const loginShopper = (username, password) => {
	console.log("username:", username, "password:", password);
	return (dispatch) => {
		return fetch('http://localhost:3000/api/v1/login', {
			method: "POST",
			body: JSON.stringify({
				shopper: {username: username, password: password}}),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}

		})
		.then(response => response.json())
		.then(data => {
			console.log("This is data.shopper.name:", data.shopper);
        localStorage.setItem("token", data.jwt);
				return dispatch(loginTheShopper(data.shopper))
      })
		.catch(error => console.log("err", error));



	}
}

export const getShopperWithToken = () => {
	return(dispatch) =>{
      return fetch(`http://localhost:3000/api/v1/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.token}`
        }
      }).then(res => res.json())
      .then(data => {
        if (data.message){
          localStorage.removeItem('token')
        }
        else{
          dispatch({type: "LOG_IN_SHOPPER", payload: data.shopper})
        }
      })

  }
}

export const createNewOrder = () => {
	return(dispatch, getState) => {
		const shopper_id = getState().shopper.shopper.id;
		const total = 0.00;
		const complete = false;
		console.log("Inside Action:", shopper_id);


		return fetch('http://localhost:3000/api/v1/orders', {
			method: "POST",
			body: JSON.stringify({
				shopper_id: shopper_id,
				total: total,
				complete: complete}),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.token}`
			}

		})
		.then(response => response.json())
		.then(data => {
			console.log("New Order has been initiated", data)
			return dispatch(startNewOrder(data))
		})
		// .catch(error => console.log("err", error));

		}
	}

	export const addToOrder = (itemObj) => {
		return(dispatch, getState) => {
			const orders = getState().shopper.orders;

			const order_id = orders[orders.length - 1].id
			const item_id = itemObj.sneaker.id;
			const qty = itemObj.quantity;
			const size = itemObj.size;
			const total = itemObj.sneaker.price * qty;
			const image = itemObj.sneaker.image;
			const color = null;

			console.log("order_id", order_id);
			console.log("item_id", item_id);
			console.log("qty", qty);
			console.log("size", size);
			console.log("total", total);
			console.log("image", image);

			return fetch('http://localhost:3000/api/v1/order_items', {
				method: "POST",
				body: JSON.stringify({
					order_id: order_id,
					item_id: item_id,
					qty: qty,
					size: size,
					total: total,
					image: image,
					color: color
				}),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${localStorage.token}`
				}

			})
			.then(response => response.json())
			.then(data => {
				console.log("Item has been added", data)
				return dispatch(addItemToOrder(data))
			})
			// .catch(error => console.log("err", error));

			}
		}

		export const deleteFromCart = (itemId) => {
			return(dispatch) => {
		      return fetch(`http://localhost:3000/api/v1/order_items/${itemId}`, {
		        method: 'DELETE',
		        headers: {
		          'Content-Type': 'application/json',
		          Accept: 'application/json',
		          Authorization: `Bearer ${localStorage.token}`
		        }
		      }).then(res => res.json())
					.then(deletedItem => {
						return dispatch(removeFromCart(deletedItem))
					})
			}
		}
