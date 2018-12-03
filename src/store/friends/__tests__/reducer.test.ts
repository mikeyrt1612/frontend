import reducer, { initialState } from '../reducer'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import { friendsMockData } from '@services/api/friends/__mocks__'

const mockError = {
  status: 500,
  message: 'MOCK',
}

describe('user reducer', () => {
  test(`it should handle ${actionTypes.GET_FRIENDS_REQUEST}`, () => {
    expect(reducer(initialState, actions.getFriendsRequest())).toEqual({
      ...initialState,
      loading: true,
    })
  })

  test(`it should handle GET_USER_SUCCESS${actionTypes.GET_FRIENDS_SUCCESS}`, () => {
    expect(reducer(initialState, actions.getFriendsSuccess(friendsMockData))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: undefined,
      data: friendsMockData,
    })
  })

  test(`it should handle ${actionTypes.GET_FRIENDS_ERROR}`, () => {
    expect(reducer(initialState, actions.getFriendsError(mockError))).toEqual({
      ...initialState,
      loading: false,
      errorMessage: mockError.message,
    })
  })
})
