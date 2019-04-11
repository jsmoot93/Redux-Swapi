// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHARACTER = "FETCH_CHARACTER";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
export const getCharacter = () => dispatch => {
  dispatch({ type: FETCH_CHARACTER });
  axios.get("https://swapi.co/api/people/")
  .then(res => {
    dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results})
    console.log(res)
  })
  .catch(err => {
    dispatch({ type: FETCH_CHARACTER_FAILURE, payload: err.response.data.error.message})
  })
}