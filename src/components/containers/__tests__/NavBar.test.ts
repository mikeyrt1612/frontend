import { mapDispatchToProps } from '../NavBar'
import { signout } from '@store/auth/actions'

describe('NavBar container', () => {
  test('should map "signout" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).signout()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(signout())
  })
})
