import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'

import { IState } from '@store/modal/model'
import * as actions from '@store/modal/actions'
import * as types from '@store/modal/actionTypes'

export const initialState: IState = {
  isOpen: false,
  config: {
    header: {
      icon: '',
      label: '',
    },
    content: '',
    action: {
      label: '',
      callback: () => {},
    },
  },
}

export type IActions = ActionType<typeof actions>

const reducer: Reducer<IState, IActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        config: action.payload,
      }

    case types.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      }

    default:
      return state
  }
}

export default reducer
