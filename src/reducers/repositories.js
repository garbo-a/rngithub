import { REQUEST, SESSION } from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload = {}, meta = {} }) => {
  if (type === SESSION.LOGGED_IN) {
    return {
      ...state
    }
  }
  return state;
};
