import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'

import { IState } from '@store/auth/model'
import * as actions from '@store/auth/actions'
import * as types from '@store/auth/actionTypes'

export const initialState: IState = {
  loading: false,
}

export type IActions = ActionType<typeof actions>

const reducer: Reducer<IState, IActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: undefined,
      }

    case types.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
      }

    default:
      return state
  }
}

export default reducer
