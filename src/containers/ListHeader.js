import { connect } from 'react-redux';
import R from 'ramda';

import {
  routing,
  session,
} from '../actions/creators';
import ListHeader from '../components/ListHeader';

export default connect(
  null,
  R.mergeAll([
    routing,
    session,
  ]),
)(ListHeader);