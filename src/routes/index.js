import React, { Component } from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import ReposListPage from '../containers/ReposListPage';
import DetailRepoPage from '../containers/DetailRepoPage';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='ReposListPage'
                 component={ReposListPage}
                 title='Repositories List'
                 initial={true}
          />
          <Scene key='DetailRepoPage'
                 component={DetailRepoPage}
                 title='Pull Requests'
          />
        </Scene>
      </Router>
    )
  }
}
