import { takeEvery, call, put } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from '@store/friends/actions'
import * as actionTypes from '@store/friends/actionTypes'
import * as api from '@services/api/friends'

export function* getFriendsRequest(action: ActionType<typeof actions.getFriendsRequest>) {
  try {
    const { data } = yield call(api.getFriends)
    yield put(actions.getFriendsSuccess(data))
  } catch (error) {
    yield put(actions.getFriendsError(error))
  }
}

export default function* root() {
  yield takeEvery(actionTypes.GET_FRIENDS_REQUEST, getFriendsRequest)
}
