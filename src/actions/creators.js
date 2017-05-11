import {
  REQUEST,
  ROUTING,
  SESSION,
} from './types';

const action = (type, payload, meta) => ({ type, payload, meta });

export const session = {
  onLoggedIn: () => action(SESSION.LOGGED_IN),
  onTopReposLoaded: repos => action(SESSION.TOP_REPOS_LOADED, repos),
  onPullsOfReposLoaded: pulls => action(SESSION.PULLS_OF_REPO_LOADED, pulls),
};

export const routing = {
  onDetailRepoPage: id => action(ROUTING.DETAIL_REPO_PAGE, id),
};

export const request = {
  onCancel: meta => action(REQUEST.CANCELLED, null, meta),
  onError: (error, meta) => action(REQUEST.ERRORED, error, meta),
  onStart: meta => action(REQUEST.STARTED, null, meta),
  onSuccess: (payload, meta) => action(REQUEST.SUCCEEDED, payload, meta),
  onProgress: (processed, total, meta) =>
    action(REQUEST.PROGRESS, { processed, total }, meta),
};