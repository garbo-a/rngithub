import R from 'ramda';

const createTypes =
  (base, types) => R.zipObj(types, types.map(R.concat(`${base}_`)));

export const REQUEST = createTypes('REQUEST', [
  'STARTED',
  'SUCCEEDED',
  'ERRORED',
  'CANCELLED',
  'PROGRESS',
]);

export const SESSION = createTypes('SESSION', [
  'LOGGED_IN',
  'TOP_REPOS_LOADED',
  'PULLS_OF_REPO_LOADED',
]);

export const ROUTING = createTypes('SESSION', [
  'DETAIL_REPO_PAGE',
]);
