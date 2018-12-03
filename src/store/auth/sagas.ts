import { takeEvery, call, put, fork } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import { push } from 'react-router-redux'

import * as actions from '@store/auth/actions'
import * as actionTypes from '@store/auth/actionTypes'
import * as api from '@services/api/auth'
import { updateToken } from '@services/api'

export function* signinRequest({ payload }: ActionType<typeof actions.signinRequest>) {
  const { username, password } = payload
  try {
    const { data: token } = yield call(api.signin, username, password)
    yield put(actions.signinSuccess(token))
  } catch (error) {
    yield put(actions.signinError(error))
  }
}

export function* signinSuccess({ payload }: ActionType<typeof actions.signinSuccess>) {
  updateToken(payload.token)
  yield put(push('/'))
}

export function* signout(action: ActionType<typeof actions.signout>) {
  updateToken()
  yield put(push('/signin'))
}

export default function* root() {
  yield takeEvery(actionTypes.SIGNIN_REQUEST, signinRequest)
  yield takeEvery(actionTypes.SIGNIN_SUCCESS, signinSuccess)
  yield takeEvery(actionTypes.SIGNOUT, signout)
}
