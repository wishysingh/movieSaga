export function apicall(text) {
  return {
    type: 'Api_Call',
    text,
  };
}

export function getMovieSuccess(movieData) {
  return {
    type: 'Api_Success',
    payload1: movieData.results,
    payload2: movieData.total_pages,
  };
}

export function searchChange(event) {
  return {
    type: 'Search_Change',
    payload: event.target.value,
  };
}

export function initialState(text) {
  return {
    type: 'Initial_State',
    payload: text,
  };
}
