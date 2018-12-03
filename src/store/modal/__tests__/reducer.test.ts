import reducer, { initialState } from '../reducer'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import { IModalConfig } from '@store/modal/model'

describe('user reducer', () => {
  test(`it should handle ${actionTypes.OPEN_MODAL}`, () => {
    const config: IModalConfig = {
      header: {
        icon: 'MOCK',
        label: 'MOCK',
      },
      content: 'MOCK',
      action: {
        label: 'MOCK',
        callback: () => {},
      },
    }

    expect(reducer(initialState, actions.openModal(config))).toEqual({
      ...initialState,
      isOpen: true,
      config,
    })
  })

  test(`it should handle ${actionTypes.CLOSE_MODAL}`, () => {
    expect(reducer(initialState, actions.closeModal())).toEqual({
      ...initialState,
      isOpen: false,
    })
  })
})
