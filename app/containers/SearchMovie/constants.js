/*
 *
 * SearchMovie constants
 *
 */
export const API_SUCCESS = 'Api_Success';
export const API_CALL = 'Api_Call';
export const SEARCH_CHANGE = 'Search_Change';
export const INITIAL_STATE = 'Initial_State';
export const DEFAULT_ACTION = 'app/SearchMovie/DEFAULT_ACTION';
export const movieListApi =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=4d3775d97a83b11d700345ad71b1e238&language=en-US&page=';

export const searchList = searchtext =>
  `https://api.themoviedb.org/3/search/movie?api_key=4d3775d97a83b11d700345ad71b1e238&query=${searchtext}&language=en-US&page=1&include_adult=false&page=`;
