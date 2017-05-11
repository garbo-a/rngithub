import { call, fork, select, put } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import { githubAPIUrl } from '../../constants'
import { getRepos, getPullsOfRepo } from '../../api'
import { SESSION } from '../../actions/types'
import { session } from '../../actions/creators'

export function* onLoggedInFetchRepos() {
  const topRepos = yield call(
    getRepos,
    githubAPIUrl,
    { activity: SESSION.LOGGED_IN, path: 'repos' },
  );
  yield put(session.onTopReposLoaded(topRepos));
}

export function* onDetailRepoPage(action) {
  const { name, owner } = action.payload;
  Actions.DetailRepoPage({ data: action.payload });
  const pullsOfRepo = yield call(
    getPullsOfRepo,
    { owner: owner.login, repo: name },
    { activity: SESSION.PULLS_OF_REPO_LOADED, path: 'repos' },
  );
  yield put(session.onPullsOfReposLoaded(pullsOfRepo));
}




