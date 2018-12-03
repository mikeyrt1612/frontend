import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'

import { IState } from '@store/friends/model'
import * as actions from '@store/friends/actions'
import * as types from '@store/friends/actionTypes'

export const initialState: IState = {
  loading: false,
  data: [],
}

export type IActions = ActionType<typeof actions>

const reducer: Reducer<IState, IActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FRIENDS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: undefined,
        data: action.payload,
      }

    case types.GET_FRIENDS_ERROR:
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
