import {
  eventChannel,
  END,
  throttle,
} from 'redux-saga';
import {
  call,
  fork,
  select,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  SESSION,
  ROUTING,
} from '../actions/types';
import {
  onDetailRepoPage,
  onLoggedInFetchRepos,
  onSearchRepos,
} from './subroutine/repos';


export function* watchLoggedIn() {
  yield takeEvery(SESSION.LOGGED_IN, onLoggedInFetchRepos);
}

export function* watchDetailRepoPage() {
  yield takeEvery(ROUTING.DETAIL_REPO_PAGE, onDetailRepoPage);
}

export function* watchSearchRepos() {
  yield takeLatest(SESSION.SEARCH_REPOS, onSearchRepos);
}
