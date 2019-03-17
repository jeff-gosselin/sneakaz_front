const createNewShopper = (shopperObj) => ({
	type: 'CREATE_NEW_SHOPPER',
	payload: shopperObj
})

export const postNewUser = (username, password, email) => {
	console.log("username:", username, "password:", password, "email", email);
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
		.then(data => {
        localStorage.setItem("token", data.jwt);
				return dispatch(createNewShopper(data.shopper))
      })
		.catch(error => console.log("err", error));



	}
	console.log("Bye");
}
