import { takeEvery, call, put } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from '@store/user/actions'
import * as actionTypes from '@store/user/actionTypes'
import * as api from '@services/api/user'

export function* getUserRequest(action: ActionType<typeof actions.getUserRequest>) {
  try {
    const { data } = yield call(api.getUser)
    yield put(actions.getUserSuccess(data))
  } catch (error) {
    yield put(actions.getUserError(error))
  }
}

export default function* root() {
  yield takeEvery(actionTypes.GET_USER_REQUEST, getUserRequest)
}
