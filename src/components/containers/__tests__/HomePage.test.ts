import { mapDispatchToProps } from '../HomePage'
import { getFriendsRequest } from '@store/friends/actions'
import { getUserRequest } from '@store/user/actions'

describe('HomePage container', () => {
  test('should map "refreshData" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).refreshData()
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith(getFriendsRequest())
    expect(dispatch).toHaveBeenCalledWith(getUserRequest())
  })
})
