import { combineReducers } from 'redux';

import pulls from './pulls';
import repositories from './repositories';

export default combineReducers({
  pulls,
  repositories,
});
