import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'

import { IState } from '@store/user/model'
import * as actions from '@store/user/actions'
import * as types from '@store/user/actionTypes'

export const initialState: IState = {
  loading: false,
  data: {
    _id: '',
    name: {
      first: '',
      last: '',
      full: '',
    },
    profileImage: '',
  },
}

export type IActions = ActionType<typeof actions>

const reducer: Reducer<IState, IActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: undefined,
        data: action.payload,
      }

    case types.GET_USER_ERROR:
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
