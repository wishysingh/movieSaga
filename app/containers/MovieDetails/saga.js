// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as action from './actions';
import { API_CALL } from './constants';

export function* apiCall(movie) {
  try {
    const movieData = yield call(api, movie);
    yield put(action.getMovieSuccess(movieData));
  } catch (err) {
    console.log(err);
  }
}
function api(movie) {
  const respdata = axios
    .get(
      `https://api.themoviedb.org/3/movie/${
        movie.id
      }?api_key=4d3775d97a83b11d700345ad71b1e238&language=en-US`,
    )
    .then(res => {
      return res.data;
    });

  return respdata;
}

export default function* movieDetailsSaga() {
  yield takeEvery(API_CALL, apiCall);
}
