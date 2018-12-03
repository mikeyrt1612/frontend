jest.mock('@services/api/todos')

import { expectSaga } from 'redux-saga-test-plan'

import {
  getTodosRequest,
  postTodosRequest,
  sendTodosRequest,
  deleteTodosRequest,
} from '../sagas'
import * as actions from '../actions'
import { todosMockData } from '@services/api/todos/__mocks__'
import { getTodos, createTodo, sendTodo, deleteTodo } from '@services/api/todos'

const mockError = {
  status: 500,
  message: 'MOCK',
}

describe('todos sagas', () => {
  describe('getTodosRequest saga', () => {
    test('should dispatch success action with successful api call', async () => {
      await expectSaga(getTodosRequest)
        .put(actions.getTodosSuccess(todosMockData))
        .run()
    })

    test('should dispatch error action with failed api call', async () => {
      (getTodos as jest.Mock).mockRejectedValueOnce(mockError)
      await expectSaga(getTodosRequest)
        .put(actions.getTodosError(mockError))
        .run()
    })
  })

  describe('postTodosRequest saga', () => {
    test('should dispatch success action with successful api call', async () => {
      await expectSaga(postTodosRequest, { payload: { message: 'MOCK' } })
        .put(actions.postTodosSuccess())
        .run()
    })

    test('should dispatch error action with failed api call', async () => {
      (createTodo as jest.Mock).mockRejectedValueOnce(mockError)
      await expectSaga(postTodosRequest, { payload: { message: 'MOCK' } })
        .put(actions.postTodosError(mockError))
        .run()
    })
  })

  describe('sendTodosRequest saga', () => {
    test('should dispatch success action with successful api call', async () => {
      await expectSaga(sendTodosRequest, { payload: { todoId: 'MOCK', recipientId: 'MOCK' } })
        .put(actions.sendTodosSuccess())
        .run()
    })

    test('should dispatch error action with failed api call', async () => {
      (sendTodo as jest.Mock).mockRejectedValueOnce(mockError)
      await expectSaga(sendTodosRequest, { payload: { todoId: 'MOCK', recipientId: 'MOCK' } })
        .put(actions.sendTodosError(mockError))
        .run()
    })
  })

  describe('deleteTodosRequest saga', () => {
    test('should dispatch success action with successful api call', async () => {
      await expectSaga(deleteTodosRequest, { payload: { todoId: 'MOCK' } })
        .put(actions.deleteTodosSuccess())
        .run()
    })

    test('should dispatch error action with failed api call', async () => {
      (deleteTodo as jest.Mock).mockRejectedValueOnce(mockError)
      await expectSaga(deleteTodosRequest, { payload: { todoId: 'MOCK' } })
        .put(actions.deleteTodosError(mockError))
        .run()
    })
  })
})
