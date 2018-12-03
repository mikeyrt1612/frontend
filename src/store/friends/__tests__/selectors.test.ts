import { stateSelector, loadingSelector, friendsSelector } from '../selectors'

describe('friends selectors', () => {
  test('state selector', () => {
    const state = {
      friends: 'MOCK',
    }
    expect(stateSelector(state)).toBe('MOCK')
  })

  test('loading selector', () => {
    const state = {
      friends: {
        loading: true,
      },
    }
    expect(loadingSelector(state)).toBe(true)
  })

  test('friends selector', () => {
    const state = {
      friends: {
        data: 'MOCK',
      },
    }
    expect(friendsSelector(state)).toBe('MOCK')
  })
})
