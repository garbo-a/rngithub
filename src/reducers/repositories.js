import { SESSION } from '../actions/types';

const initialState = [];

export default (state = initialState, { type, payload = {}, meta = {} }) => {
  if (type === SESSION.TOP_REPOS_LOADED) {
    const repos = (payload && payload.items) || [];
    return repos;
  }
  return state;
};
