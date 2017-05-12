import { ROUTING, SESSION } from '../actions/types';

const initialState = [];

export default (state = initialState, { type, payload = {}, meta = {} }) => {
  if (type === SESSION.PULLS_OF_REPO_LOADED) {
    const pulls = Array.isArray(payload) ? payload : [];
    return pulls;
  }
  if (type === ROUTING.DETAIL_REPO_PAGE) {
    return initialState;
  }
  return state;
};
