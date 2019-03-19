export const FETCH_SNEAKERS_BEGIN = 'FETCH_SNEAKERS_BEGIN';
export const FETCH_SNEAKERS_SUCCESS = 'FETCH_SNEAKERS_SUCCESS';
export const FETCH_SNEAKERS_FAILURE = 'FETCH_SNEAKERS_FAILURE';
export const SELECT_SNEAKER = 'SELECT_SNEAKER';


export const selectedSneaker = (sneaker) => ({ type: "SELECT_SNEAKER", payload: sneaker })






export const fetchSneakersBegin = () => ({
  type: FETCH_SNEAKERS_BEGIN
});

export const fetchSneakersSuccess = sneakers => ({
  type: FETCH_SNEAKERS_SUCCESS,
  payload: { sneakers }
});

export const fetchSneakersFailure = error => ({
  type: FETCH_SNEAKERS_FAILURE,
  payload: { error }
});

export function fetchSneakers() {
  return dispatch => {
    dispatch(fetchSneakersBegin());
		let token = localStorage.token;
    return fetch("http://localhost:3000/api/v1/items", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchSneakersSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchSneakersFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// export const getSneakerData = () => {
// 	return (dispatch) => {
// 		return fetch('http://localhost:3000/api/v1/items', {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${localStorage.token}`
// 			}
//       })
// 		.then(response => response.json())
// 		.then(sneakers => dispatch(getSneakers(sneakers)))
// 	}
// }
