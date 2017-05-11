/**
 * Created by oharbovskyi on 5/11/17.
 */
import { AppRegistry, Platform } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import whyDidYouUpdate from 'why-did-you-update';

import rootSaga from './sagas';
import store from './store/store';
import App from './containers/app';
import DevMenuWrapper from './containers/dev-menu-wrapper';
import setupOneSignal from './sdks/one-signal';
import globalErrorHandler from '../scripts/global-error-handler';
import LocalNotification from './sdks/local-notifications';
import { USE_WHY_DID_YOU_UPDATE } from './config';

globalErrorHandler.init();

store.runSaga(rootSaga);

i18nInit();

const devMenu = scene => __DEV__ ?
  <DevMenuWrapper>{scene}</DevMenuWrapper> :
  scene;

const DevMenuWrappedApp = () =>
  devMenu(<App />);

if (__DEV__ && USE_WHY_DID_YOU_UPDATE) whyDidYouUpdate(React, { include: /^MediaList/ });

// In order for hot reloading to work this must be created using
// createClass.
/* eslint-disable react/prefer-stateless-function, react/prefer-es6-class */
const ProviderWrappedApp = React.createClass({

  render() {
    return (
      <Provider store={store}>
        <DevMenuWrappedApp />
      </Provider>);
  },
});
/* Seting up OneSignal to have access to store */
setupOneSignal(store.dispatch.bind(store));
if (Platform.OS === 'ios') {
  LocalNotification.setState(store.dispatch.bind(store));
}

AppRegistry.registerComponent('kamino', () => ProviderWrappedApp);

