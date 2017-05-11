import { call, fork, select, put } from 'redux-saga/effects';
import { session } from '../actions/creators';
import {
  watchDetailRepoPage,
  watchLoggedIn,
} from './watchers';

export default function* root() {
  // register watchers
  yield fork(watchLoggedIn);
  yield fork(watchDetailRepoPage);

  // start loading top repos
  yield put(session.onLoggedIn());
}