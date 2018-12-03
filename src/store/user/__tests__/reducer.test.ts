import reducer, { initialState } from '../reducer'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import { userMockData } from '@services/api/user/__mocks__'

const mockError = {
  status: 500,
  message: 'MOCK',
}

describe('user reducer', () => {
  test(`it should handle ${actionTypes.GET_USER_REQUEST}`, () => {
    expect(reducer(initialState, actions.getUserRequest())).toEqual({
      ...initialState,
      loading: true,
    })
  })

  test(`it should handle ${actionTypes.GET_USER_SUCCESS}`, () => {
    expect(reducer(initialState, actions.getUserSuccess(userMockData))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: undefined,
      data: userMockData,
    })
  })

  test(`it should handle ${actionTypes.GET_USER_ERROR}`, () => {
    expect(reducer(initialState, actions.getUserError(mockError))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: mockError.message,
    })
  })
})
