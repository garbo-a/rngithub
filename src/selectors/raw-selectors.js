// This file contains selectors that have no transformations.
// Just direct queries against the store.

import R from 'ramda';


// repos
export const getCurrentRepositories = R.path(['repositories']);

// pulls
export const getCurrentRepoPulls = R.path(['pulls']);
