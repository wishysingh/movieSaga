import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMovieDetailsDomain = state =>
  state.get('movieDetails', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchMovie
 */

export const makeSelectMovieDetails = () =>
  createSelector(selectMovieDetailsDomain, substate => substate.get('movies'));

export default selectMovieDetailsDomain;
