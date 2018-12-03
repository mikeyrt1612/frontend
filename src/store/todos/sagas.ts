import { takeEvery, call, put } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from '@store/todos/actions'
import * as actionTypes from '@store/todos/actionTypes'
import * as api from '@services/api/todos'

export function* getTodosRequest(action: ActionType<typeof actions.getTodosRequest>) {
  try {
    const { data } = yield call(api.getTodos)
    yield put(actions.getTodosSuccess(data))
  } catch (error) {
    yield put(actions.getTodosError(error))
  }
}

export function* postTodosRequest({ payload }: ActionType<typeof actions.postTodosRequest>) {
  try {
    yield call(api.createTodo, payload.message)
    yield put(actions.postTodosSuccess())
  } catch (error) {
    yield put(actions.postTodosError(error))
  }
}

export function* sendTodosRequest({ payload }: ActionType<typeof actions.sendTodosRequest>) {
  try {
    yield call(api.sendTodo, payload.todoId, payload.recipientId)
    yield put(actions.sendTodosSuccess())
  } catch (error) {
    yield put(actions.sendTodosError(error))
  }
}

export function* deleteTodosRequest({ payload }: ActionType<typeof actions.deleteTodosRequest>) {
  try {
    yield call(api.deleteTodo, payload.todoId)
    yield put(actions.deleteTodosSuccess())
  } catch (error) {
    yield put(actions.deleteTodosError(error))
  }
}

export default function* root() {
  yield takeEvery(
    [
      actionTypes.GET_TODOS_REQUEST,
      actionTypes.POST_TODOS_SUCCESS,
      actionTypes.SEND_TODO_SUCCESS,
      actionTypes.DELETE_TODOS_SUCCESS,
    ],
    getTodosRequest,
  )
  yield takeEvery(actionTypes.POST_TODOS_REQUEST, postTodosRequest)
  yield takeEvery(actionTypes.SEND_TODO_REQUEST, sendTodosRequest)
  yield takeEvery(actionTypes.DELETE_TODOS_REQUEST, deleteTodosRequest)
}
