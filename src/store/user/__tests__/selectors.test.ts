import {
  stateSelector,
  loadingSelector,
  errorMessageSelector,
  userSelector,
  profileImageSelector,
} from '../selectors'

describe('user selectors', () => {
  test('state selector', () => {
    const state = {
      user: 'MOCK',
    }
    expect(stateSelector(state)).toBe('MOCK')
  })

  test('loading selector', () => {
    const state = {
      user: {
        loading: true,
      },
    }
    expect(loadingSelector(state)).toBe(true)
  })

  test('error message selector', () => {
    const state = {
      user: {
        errorMessage: 'MOCK',
      },
    }
    expect(errorMessageSelector(state)).toBe('MOCK')
  })

  test('user selector should return user', () => {
    const state = {
      user: {
        data: 'MOCK',
      },
    }
    expect(userSelector(state)).toBe('MOCK')
  })

  test('profile image selector', () => {
    const state = {
      user: {
        data: {
          profileImage: 'MOCK',
        },
      },
    }
    expect(profileImageSelector(state)).toBe('MOCK')
  })
})
