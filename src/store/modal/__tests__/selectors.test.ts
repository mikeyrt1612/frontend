import {
  stateSelector,
  isOpenSelector,
  modalConfigSelector,
} from '../selectors'

describe('modal selectors', () => {
  test('state selector', () => {
    const state = {
      modal: 'MOCK',
    }
    expect(stateSelector(state)).toBe('MOCK')
  })

  test('is open selector', () => {
    const state = {
      modal: {
        isOpen: true,
      },
    }
    expect(isOpenSelector(state)).toBe(true)
  })

  test('modal data selector', () => {
    const state = {
      modal: {
        config: 'MOCK',
      },
    }
    expect(modalConfigSelector(state)).toBe('MOCK')
  })
})
