// const loginTheShopper = (shopperObj) => ({
// 	type: 'LOG_IN_SHOPPER',
// 	payload: shopperObj
// })

// export const postNewShopper = (username, password, email) => {
// 	console.log("username:", username, "password:", password, "email", email);
// 	return (dispatch) => {
// 		return fetch('http://localhost:3000/api/v1/shoppers', {
// 			method: "POST",
// 			body: JSON.stringify({
// 				shopper: {username: username, password: password, email: email}}),
// 			headers: {
// 				"Content-Type": "application/json",
// 				Accept: "application/json"
// 			}

// 		})
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log("Hi");
//         localStorage.setItem("token", data.jwt);
// 				return dispatch(createNewShopper(data))
//       })
// 		.catch(error => console.log("err", error));
