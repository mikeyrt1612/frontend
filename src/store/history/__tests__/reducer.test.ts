import reducer, { initialState } from '../reducer'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import { historyMockData } from '@services/api/history/__mocks__'

const mockError = {
  status: 500,
  message: 'MOCK',
}

describe('user reducer', () => {
  test(`it should handle ${actionTypes.GET_HISTORY_REQUEST}`, () => {
    expect(reducer(initialState, actions.getHistoryRequest())).toEqual({
      ...initialState,
      loading: true,
    })
  })

  test(`it should handle GET_USER_SUCCESS${actionTypes.GET_HISTORY_SUCCESS}`, () => {
    expect(reducer(initialState, actions.getHistorySuccess(historyMockData))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: undefined,
      data: historyMockData,
    })
  })

  test(`it should handle ${actionTypes.GET_HISTORY_ERROR}`, () => {
    expect(reducer(initialState, actions.getHistoryError(mockError))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: mockError.message,
    })
  })
})
