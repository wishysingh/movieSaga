import { API_CALL, API_SUCCESS } from './constants';
export function apicall(id) {
  return {
    type: API_CALL,
    id,
  };
}

export function getMovieSuccess(movieData) {
  return {
    type: API_SUCCESS,
    payload: movieData,
  };
}
