/*
 *
 * MovieDetails reducer
 *
 */

import { fromJS } from 'immutable';

export const initialState = fromJS({ movies: [] });

function movieDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case 'Api_Success':
      return state.set('movies', action.payload);

    default:
      return state;
  }
}

export default movieDetailsReducer;
