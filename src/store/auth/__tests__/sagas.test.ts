jest.mock('@services/api/auth')
jest.mock('@services/api', () => ({
  updateToken: jest.fn(),
}))

import { expectSaga } from 'redux-saga-test-plan'
import { push } from 'react-router-redux'

import { signinRequest, signinSuccess, signout } from '../sagas'
import * as actions from '../actions'
import { signin } from '@services/api/auth'
import { updateToken } from '@services/api'
import { signinMockData } from '@services/api/auth/__mocks__'

const mockError = {
  status: 500,
  message: 'MOCK',
}

const mockSignin = {
  username: 'MOCK',
  password: 'MOCK',
}

describe('auth sagas', () => {
  describe('signinRequest saga', () => {
    test('should dispatch success action with successful api call', async () => {
      await expectSaga(signinRequest, { payload: mockSignin })
        .put(actions.signinSuccess(signinMockData))
        .run()
    })
    test('should dispatch error action with failed api call', async () => {
      (signin as jest.Mock).mockRejectedValueOnce(mockError)
      await expectSaga(signinRequest, { payload: mockSignin })
        .put(actions.signinError(mockError))
        .run()
    })
  })

  describe('signin success saga', () => {
    test('should update token and navigate to home page', async () => {
      await expectSaga(signinSuccess, { payload: signinMockData })
        .put(push('/'))
        .run()
      expect(updateToken).toHaveBeenCalledWith(signinMockData.token)
    })
  })

  describe('signout saga', () => {
    test('should clear token and navigate back to the sign in page', async () => {
      await expectSaga(signout, { payload: signinMockData })
        .put(push('/signin'))
        .run()
      expect(updateToken).toHaveBeenCalledWith()
    })
  })
})
