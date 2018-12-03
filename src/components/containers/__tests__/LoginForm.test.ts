import { mapDispatchToProps } from '../LoginForm'
import { signinRequest } from '@store/auth/actions'

const mockUsername = 'MOCK'
const mockPassword = 'MOCK2'

describe('SignInPage container', () => {
  test('should map "onLogin" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onSubmit(mockUsername, mockPassword)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(signinRequest({
      username: mockUsername,
      password: mockPassword,
    }))
  })
})
