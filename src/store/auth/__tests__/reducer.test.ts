import reducer, { initialState } from '../reducer'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'

const mockError = {
  status: 500,
  message: 'MOCK',
}

const mockSignin = {
  username: 'MOCK',
  password: 'MOCK',
}

const mockData = { token: 'MOCK' }

describe('user reducer', () => {
  test(`it should handle ${actionTypes.SIGNIN_REQUEST}`, () => {
    expect(reducer(initialState, actions.signinRequest(mockSignin))).toEqual({
      ...initialState,
      loading: true,
    })
  })

  test(`it should handle GET_USER_SUCCESS${actionTypes.SIGNIN_SUCCESS}`, () => {
    expect(reducer(initialState, actions.signinSuccess(mockData))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: undefined,
    })
  })

  test(`it should handle ${actionTypes.SIGNIN_ERROR}`, () => {
    expect(reducer(initialState, actions.signinError(mockError))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: mockError.message,
    })
  })
})
