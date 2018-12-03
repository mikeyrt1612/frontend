import { takeEvery, call, put } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from '@store/history/actions'
import * as actionTypes from '@store/history/actionTypes'
import * as api from '@services/api/history'
import { POST_TODOS_SUCCESS } from '@store/todos/actionTypes'

export function* getHistoryRequest(action: ActionType<typeof actions.getHistoryRequest>) {
  try {
    const { data } = yield call(api.getHistory)
    yield put(actions.getHistorySuccess(data))
  } catch (error) {
    yield put(actions.getHistoryError(error))
  }
}

export default function* root() {
  yield takeEvery(
    [
      actionTypes.GET_HISTORY_REQUEST,
      POST_TODOS_SUCCESS,
    ],
    getHistoryRequest,
  )
}
