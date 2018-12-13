import { fromJS } from 'immutable';
import searchMovieReducer from '../reducer';

describe('searchMovieReducer', () => {
  it('returns the initial state', () => {
    expect(searchMovieReducer(undefined, {})).toEqual(fromJS({}));
  });
});
