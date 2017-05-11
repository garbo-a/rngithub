import { connect } from 'react-redux';
import R from 'ramda';

import {
  routing,
  session,
} from '../actions/creators';
import selector from '../selectors/ReposListPage';
import ReposListPage from '../components/ReposListPage';

export default connect(
  selector,
  R.mergeAll([
    routing,
    session,
  ]),
)(ReposListPage);