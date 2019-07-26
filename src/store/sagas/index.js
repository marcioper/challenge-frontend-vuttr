import { all, takeLatest } from 'redux-saga/effects';

import { Types as ToolsTypes } from '../ducks/tools';

import { getRequest, addRequest, removeRequest } from './tools';

export default function* rootSaga() {
  yield all([
    takeLatest(ToolsTypes.GET_REQUEST, getRequest),
    takeLatest(ToolsTypes.ADD_REQUEST, addRequest),
    takeLatest(ToolsTypes.REMOVE_REQUEST, removeRequest),
  ]);
}
