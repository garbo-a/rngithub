import { createStructuredSelector } from 'reselect';

import {
  getCurrentRepositories,
} from './raw-selectors';

export default createStructuredSelector({
  repositories: getCurrentRepositories,
});
