import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchMovie state domain
 */

const selectSearchMovieDomain = state => state.get('searchMovie', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchMovie
 */

const makeSelectSearchMovie = () =>
  createSelector(selectSearchMovieDomain, substate =>
    substate.get('searchtext'),
  );

const makeSelectMovies = () =>
  createSelector(selectSearchMovieDomain, substate => substate.get('movies'));

const makeSelectMaxPage = () =>
  createSelector(selectSearchMovieDomain, substate => substate.get('maxpage'));

export { makeSelectSearchMovie, makeSelectMovies, makeSelectMaxPage };

export default selectSearchMovieDomain;
