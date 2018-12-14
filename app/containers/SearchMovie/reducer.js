/*
 *
 * SearchMovie reducer
 *
 */

import { fromJS } from 'immutable';
import { SEARCH_CHANGE, API_SUCCESS, INITIAL_STATE } from './constants';

export const initialState = fromJS({
  searchtext: '',
  movies: [],
  maxpage: 1,
});

function searchMovieReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHANGE:
      // return Object.assign({}, state, { searchtext: action.payload });
      return state.set('searchtext', action.payload);
    case INITIAL_STATE:
      // return Object.assign({}, state, { searchtext: action.payload });
      return state.set('searchtext', action.payload);

    case API_SUCCESS:
      return state
        .set('movies', action.payload1)
        .set('maxpage', action.payload2);

    default:
      return state;
  }
}

export default searchMovieReducer;
