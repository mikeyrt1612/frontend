import reducer, { initialState } from '../reducer'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import { todosMockData } from '@services/api/todos/__mocks__'

const mockError = {
  status: 500,
  message: 'MOCK',
}

describe('user reducer', () => {
  test(`it should handle ${actionTypes.GET_TODOS_REQUEST}`, () => {
    expect(reducer(initialState, actions.getTodosRequest())).toEqual({
      ...initialState,
      loading: true,
    })
  })

  test(`it should handle ${actionTypes.GET_TODOS_SUCCESS}`, () => {
    expect(reducer(initialState, actions.getTodosSuccess(todosMockData))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: undefined,
      todos: todosMockData,
    })
  })

  test(`it should handle ${actionTypes.GET_TODOS_ERROR}`, () => {
    expect(reducer(initialState, actions.getTodosError(mockError))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: mockError.message,
    })
  })
})
