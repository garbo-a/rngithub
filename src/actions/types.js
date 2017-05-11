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
]);