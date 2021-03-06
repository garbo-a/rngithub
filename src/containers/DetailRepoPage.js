import { connect } from 'react-redux';
import R from 'ramda';

import {
  routing,
  session,
} from '../actions/creators';
import selector from '../selectors/DetailRepoPage';
import DetailRepoPage from '../components/DetailRepoPage';

export default connect(
  selector,
  R.mergeAll([
    routing,
    session,
  ]),
)(DetailRepoPage);
