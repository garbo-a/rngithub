// will work in the future with requestSequence adding colors to sagas calls
import { createLogger } from 'redux-logger';
import R from 'ramda';

const getActionType = (action) => {
  const type = action.type;
  const activity = R.path(['meta', 'activity'], action);
  const path = R.path(['meta', 'path'], action);
  const title =
    R.path(['payload', 'title'], action)
    || R.path(['meta', 'title'], action);
  const displayType = [type, activity, path, title]
  .filter(item => item)
  .join(' | ');
  return {
    ...action,
    type: displayType,
  };
};

const configureLogger = () => createLogger({
  collapsed: true,
  actionTransformer: getActionType,
  logger: console,
  colors: {
    title: ({ type }) => {
      if (type.includes('STARTED')) return 'blue';
      if (type.includes('SUCCEEDED')) return 'green';
      if (type.includes('ERRORED')) return 'red';
      return undefined;
    },
  },
});

export default configureLogger;
