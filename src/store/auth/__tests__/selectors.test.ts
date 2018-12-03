import { stateSelector, loadingSelector, errorMessageSelector } from '../selectors'

describe('auth selectors', () => {
  test('state selector', () => {
    const state = {
      signin: 'MOCK',
    }
    expect(stateSelector(state)).toBe('MOCK')
  })

  test('loading selector', () => {
    const state = {
      signin: {
        loading: true,
      },
    }
    expect(loadingSelector(state)).toBe(true)
  })

  test('error message selector', () => {
    const state = {
      signin: {
        errorMessage: 'MOCK',
      },
    }
    expect(errorMessageSelector(state)).toBe('MOCK')
  })
})
