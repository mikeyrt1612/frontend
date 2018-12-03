import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'

import { IState } from '@store/history/model'
import * as actions from '@store/history/actions'
import * as types from '@store/history/actionTypes'

export const initialState: IState = {
  loading: false,
  data: [],
}

export type IActions = ActionType<typeof actions>

const reducer: Reducer<IState, IActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: undefined,
        data: action.payload,
      }

    case types.GET_HISTORY_ERROR:
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
