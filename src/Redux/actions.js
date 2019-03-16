const createNewUser = (shopperObj) => ({
	type: 'CREATE_NEW_USER',
	payload: shopperObj
})

export const postNewUser = (username, password, email) => {
	console.log("Hello");
	return dispatch => {
		fetch('http://localhost:3000/api/v1/login', {
			method: "POST",
			body: JSON.stringify({
				shopper: {username: username, password: password, email: email}}),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}

		})
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(error => console.log(error));



	}
}
// dispatch(createNewUser(result.shopper))
