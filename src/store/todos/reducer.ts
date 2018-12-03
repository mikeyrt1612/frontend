import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'

import { IState } from '@store/todos/model'
import * as actions from '@store/todos/actions'
import * as types from '@store/todos/actionTypes'

export const initialState: IState = {
  loading: false,
  todos: [],
  errorMessage: undefined,
}

export type IActions = ActionType<typeof actions>

const reducer: Reducer<IState, IActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: undefined,
        todos: action.payload,
      }

    case types.GET_TODOS_ERROR:
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
