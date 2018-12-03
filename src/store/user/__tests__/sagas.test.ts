jest.mock('@services/api/user')

import { expectSaga } from 'redux-saga-test-plan'

import { getUserRequest } from '../sagas'
import * as actions from '../actions'
import { userMockData } from '@services/api/user/__mocks__'
import { getUser } from '@services/api/user'

const mockError = {
  status: 500,
  message: 'MOCK',
}

describe('user sagas', () => {
  describe('getUserRequest saga', () => {
    test('should dispatch success action with successful api call', async () => {
      await expectSaga(getUserRequest)
        .put(actions.getUserSuccess(userMockData))
        .run()
    })
    test('should dispatch error action with failed api call', async () => {
      (getUser as jest.Mock).mockRejectedValueOnce(mockError)
      await expectSaga(getUserRequest)
        .put(actions.getUserError(mockError))
        .run()
    })
  })
})
