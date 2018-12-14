import {
  API_CALL,
  SEARCH_CHANGE,
  API_SUCCESS,
  INITIAL_STATE,
} from './constants';

export function apicall(text) {
  return {
    type: API_CALL,
    text,
  };
}

export function getMovieSuccess(movieData) {
  return {
    type: API_SUCCESS,
    payload1: movieData.results,
    payload2: movieData.total_pages,
  };
}

export function searchChange(event) {
  return {
    type: SEARCH_CHANGE,
    payload: event.target.value,
  };
}

export function initialState(text) {
  return {
    type: INITIAL_STATE,
    payload: text,
  };
}
