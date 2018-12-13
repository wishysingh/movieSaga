/*
 *
 * SearchMovie reducer
 *
 */

import { fromJS } from 'immutable';

export const initialState = fromJS({
  searchtext: '',
  movies: [],
  maxpage: 1,
});

function searchMovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'Search_Change':
      // return Object.assign({}, state, { searchtext: action.payload });
      return state.set('searchtext', action.payload);
    case 'Initial_State':
      // return Object.assign({}, state, { searchtext: action.payload });
      return state.set('searchtext', action.payload);

    case 'Api_Success':
      return state
        .set('movies', action.payload1)
        .set('maxpage', action.payload2);

    default:
      return state;
  }
}

export default searchMovieReducer;
