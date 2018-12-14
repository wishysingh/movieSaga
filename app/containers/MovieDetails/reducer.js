/*
 *
 * MovieDetails reducer
 *
 */

import { fromJS } from 'immutable';
import { API_SUCCESS } from './constants';

export const initialState = fromJS({ movies: [] });

function movieDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case API_SUCCESS:
      return state.set('movies', action.payload);

    default:
      return state;
  }
}

export default movieDetailsReducer;
