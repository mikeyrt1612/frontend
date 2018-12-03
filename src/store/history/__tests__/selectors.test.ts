import {
  stateSelector,
  loadingSelector,
  historySelector,
  errorMessageSelector,
} from '../selectors'

describe('history selectors', () => {
  test('state selector', () => {
    const state = {
      history: 'MOCK',
    }
    expect(stateSelector(state)).toBe('MOCK')
  })

  test('loading selector', () => {
    const state = {
      history: {
        loading: true,
      },
    }
    expect(loadingSelector(state)).toBe(true)
  })

  test('error message selector', () => {
    const state = {
      history: {
        errorMessage: 'MOCK',
      },
    }
    expect(errorMessageSelector(state)).toBe('MOCK')
  })

  test('history selector', () => {
    const state = {
      history: {
        data: 'MOCK',
      },
    }
    expect(historySelector(state)).toBe('MOCK')
  })
})
