import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ReposListPage from '../components/ReposListPage';
import DetailRepoPage from '../components/DetailRepoPage';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="ReposListPage" component={ReposListPage} title="ReposListPage" initial={true} />
          <Scene key="DetailRepoPage" component={DetailRepoPage} title="DetailRepoPage" />
        </Scene>
      </Router>
    )
  }
}