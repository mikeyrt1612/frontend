jest.mock('@services/api/friends')

import { expectSaga } from 'redux-saga-test-plan'

import { getFriendsRequest } from '../sagas'
import * as actions from '../actions'
import { friendsMockData } from '@services/api/friends/__mocks__'
import { getFriends } from '@services/api/friends'

const mockError = {
  status: 500,
  message: 'MOCK',
}

describe('friends sagas', () => {
  describe('getFriendsRequest saga', () => {
    test('should dispatch success action with successful api call', async () => {
      await expectSaga(getFriendsRequest)
        .put(actions.getFriendsSuccess(friendsMockData))
        .run()
    })
    test('should dispatch error action with failed api call', async () => {
      (getFriends as jest.Mock).mockRejectedValueOnce(mockError)
      await expectSaga(getFriendsRequest)
        .put(actions.getFriendsError(mockError))
        .run()
    })
  })
})
