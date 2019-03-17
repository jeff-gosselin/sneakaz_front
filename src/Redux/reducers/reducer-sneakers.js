const initialState = {
  sneakers: {}
}
export const sneakerReducer = (state=initialState, action) => {
	switch(action.type) {
		case "GET_SNEAKERS_DATA":
			return action.payload;
		default:
			return state;
	}
}
