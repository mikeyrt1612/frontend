jest.mock('@services/api/history/index')

import { expectSaga } from 'redux-saga-test-plan'

import { getHistoryRequest } from '../sagas'
import * as actions from '../actions'
import { historyMockData } from '@services/api/history/__mocks__'
import { getHistory } from '@services/api/history'

const mockError = {
  status: 500,
  message: 'MOCK',
}

describe('history sagas', () => {
  describe('getHistoryRequest saga', () => {
    test('should dispatch success action with successful api call', async () => {
      await expectSaga(getHistoryRequest)
        .put(actions.getHistorySuccess(historyMockData))
        .run()
    })

    test('should dispatch error action with failed api call', async () => {
      (getHistory as jest.Mock).mockRejectedValueOnce(mockError)
      await expectSaga(getHistoryRequest)
        .put(actions.getHistoryError(mockError))
        .run()
    })
  })
})
