import {
  REQUEST,
  SESSION,
} from './types';
import { sceneKeys } from '../routes-contants';

const action = (type, payload, meta) => ({ type, payload, meta });

export const session = {
  onLoggedIn: () =>
    action(SESSION.LOGGED_IN),
};

export const request = {
  onCancel: meta => action(REQUEST.CANCELLED, null, meta),
  onError: (error, meta) => action(REQUEST.ERRORED, error, meta),
  onStart: meta => action(REQUEST.STARTED, null, meta),
  onSuccess: (payload, meta) => action(REQUEST.SUCCEEDED, payload, meta),
  onProgress: (processed, total, meta) =>
    action(REQUEST.PROGRESS, { processed, total }, meta),
};