import React, { PureComponent } from 'react';
import {
  AppState,
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes'

import rootSaga from './sagas';
import store from './store/store';


store.runSaga(rootSaga);

/* eslint-disable react/prefer-stateless-function, react/prefer-es6-class */
class RNGithub extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', (e) => {
      this.setState({ appState: e });
    });
  }


  render() {
    return (
      <Provider store={store}>
        <Routes store={store} />
      </Provider>);
  }
}


AppRegistry.registerComponent('rngithub', () => RNGithub);

