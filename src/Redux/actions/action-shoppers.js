const createNewShopper = (shopperObj) => ({
	type: 'CREATE_NEW_SHOPPER',
	payload: shopperObj
})

const loginTheShopper = (shopperObj) => ({
	type: 'LOG_IN_SHOPPER',
	payload: shopperObj
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
        localStorage.setItem("token", data.jwt);
				return dispatch(createNewShopper(data))
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
					console.log(data)
          dispatch({type: "LOG_IN_SHOPPER", payload: data.shopper})
        }
      })

  }
}

export const createNewOrder = (shopper_id) => {
	return(dispatch) => {
		console.log("Inside Action:", shopper_id);
		dispatch({type: "CREATE_NEW_ORDER", payload: "New Order Created!"})

	}

}
