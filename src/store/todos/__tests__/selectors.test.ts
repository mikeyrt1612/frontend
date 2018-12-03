import {
  stateSelector,
  loadingSelector,
  todosSelector,
  errorMessageSelector,
} from '../selectors'

describe('todos selectors', () => {
  test('state selector', () => {
    const state = {
      todos: 'MOCK',
    }
    expect(stateSelector(state)).toBe('MOCK')
  })

  test('loading selector', () => {
    const state = {
      todos: {
        loading: true,
      },
    }
    expect(loadingSelector(state)).toBe(true)
  })

  test('error message selector', () => {
    const state = {
      todos: {
        errorMessage: 'MOCK',
      },
    }
    expect(errorMessageSelector(state)).toBe('MOCK')
  })

  test('todos selector', () => {
    const state = {
      todos: {
        todos: 'MOCK',
      },
    }
    expect(todosSelector(state)).toBe('MOCK')
  })
})
