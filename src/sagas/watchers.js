import {
  takeLatest,
  eventChannel,
  END,
  throttle,
} from 'redux-saga';
import { call, fork, select, put, takeEvery } from 'redux-saga/effects';
import { SESSION, ROUTING } from '../actions/types';
import {
  onDetailRepoPage,
  onLoggedInFetchRepos,
} from './subroutine/repos';


export function* watchLoggedIn() {
  yield takeEvery(SESSION.LOGGED_IN, onLoggedInFetchRepos);
}

export function* watchDetailRepoPage() {
  yield takeEvery(ROUTING.DETAIL_REPO_PAGE, onDetailRepoPage);
}