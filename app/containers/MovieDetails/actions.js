export function apicall(id) {
  return {
    type: 'Api_Call',
    id,
  };
}

export function getMovieSuccess(movieData) {
  return {
    type: 'Api_Success',
    payload: movieData,
  };
}
