import { call, fork, select, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Actions } from 'react-native-router-flux';

import { githubAPIUrl, githubAPIUrlSearch } from '../../constants'
import { getRepos, getPullsOfRepo } from '../../api'
import { SESSION } from '../../actions/types'
import { session } from '../../actions/creators'

export function* onLoggedInFetchRepos() {
  try {
    const topRepos = yield call(
      getRepos,
      githubAPIUrl,
      { activity: SESSION.LOGGED_IN, path: 'repos' },
    );
    yield put(session.onTopReposLoaded(topRepos));
  } catch (e) {
    console.log(e);
  }
}

export function* onSearchRepos(action) {
  const query = action.payload;
  yield delay(500);
  const repos = yield call(
    getRepos,
    `${githubAPIUrlSearch}${query}&sort=stars&order=desc`,
    { activity: SESSION.LOGGED_IN, path: 'repos' },
  );
  yield put(session.onTopReposLoaded(repos));
}

export function* onDetailRepoPage(action) {
  const { name, owner } = action.payload;
  Actions.DetailRepoPage({ data: action.payload });
  const pullsOfRepo = yield call(
    getPullsOfRepo,
    { owner: owner.login, repo: name },
    { activity: SESSION.PULLS_OF_REPO_LOADED, path: 'pulls' },
  );
  yield put(session.onPullsOfReposLoaded(pullsOfRepo));
}
