import { createStructuredSelector, createSelector } from 'reselect';

import {
  getCurrentRepoPulls,
} from './raw-selectors';

const getPullsTrimmed = createSelector(
  [getCurrentRepoPulls],
  (pulls) => {
    pulls.length >= 10 ? pulls.length = 10 : pulls;
    return pulls;
  },
);

export default createStructuredSelector({
  pulls: getPullsTrimmed,
});
