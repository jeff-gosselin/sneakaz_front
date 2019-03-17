export const getSneakers = (sneakers) => {
	console.log("You have some sneakers:", sneakers);
	return {
		type: "GET_SNEAKERS_DATA",
		payload: sneakers
	}
}

export const getSneakerData = () => {
	return (dispatch) => {
		return fetch('http://localhost:3000/api/v1/items')
		.then(response => response.json())
		.then(sneakers => dispatch(getSneakers(sneakers)))
	}
}
