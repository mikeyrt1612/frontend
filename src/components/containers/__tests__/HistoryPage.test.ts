import { mapDispatchToProps } from '../HistoryPage'
import { getHistoryRequest } from '@store/history/actions'

describe('HistoryPage container', () => {
  test('should map "getHistory" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).getHistory()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(getHistoryRequest())
  })
})
