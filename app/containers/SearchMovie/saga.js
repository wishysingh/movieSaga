import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as action from './actions';

export function* apiCall(text) {
  try {
    const movieData = yield call(api, text);
    yield put(action.getMovieSuccess(movieData));
  } catch (err) {
    console.log(err);
  }
}
function api(text) {
  const respdata = axios.get(text.text).then(res => {
    return res.data;
  });

  return respdata;
}
// Individual exports for testing
export default function* searchMovieSaga() {
  yield takeEvery('Api_Call', apiCall);
  // See example in containers/HomePage/saga.js
}
