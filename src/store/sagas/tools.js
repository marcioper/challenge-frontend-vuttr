import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ToolsActions } from '../ducks/tools';

export function* getRequest(action) {
  try {
    const { payload } = action;
    const { search, withTag } = payload;

    let response = null;
    if (!withTag) {
      response = yield call(api.get, `/tools?q=${search}`);
    } else {
      response = yield call(api.get, `/tools?tags_like=${search}`);
    }

    if (response !== null && response.status === 200) {
      yield put(ToolsActions.getSuccess(response.data));
    } else {
      yield put(
        ToolsActions.getFailure(
          'Oops something went wrong :( Please contact your administrator.'
        )
      );
    }
  } catch (error) {
    yield put(
      ToolsActions.getFailure(
        'Oops something went wrong :( Please contact your administrator.'
      )
    );
  }
}

export function* addRequest(action) {
  try {
    const { payload } = action;
    const { tool } = payload;

    const response = yield call(api.post, '/tools', {
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags,
    });

    if (response !== null && response.status === 201) {
      yield put(ToolsActions.addSuccess(response.data));
    } else {
      yield put(
        ToolsActions.addFailure(
          'Oops something went wrong :( Please contact your administrator.'
        )
      );
    }
  } catch (error) {
    yield put(
      ToolsActions.addFailure(
        'Oops something went wrong :( Please contact your administrator.'
      )
    );
  }
}

export function* removeRequest(action) {
  try {
    const { payload } = action;
    const { id } = payload;

    const response = yield call(api.delete, `/tools/${id}`);

    if (response !== null && response.status === 200) {
      yield put(ToolsActions.removeSuccess());
    } else {
      yield put(
        ToolsActions.removeFailure(
          'Oops something went wrong :( Please contact your administrator.'
        )
      );
    }
  } catch (error) {
    yield put(
      ToolsActions.removeFailure(
        'Oops something went wrong :( Please contact your administrator.'
      )
    );
  }
}
