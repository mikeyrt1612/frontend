import { Reducer } from 'redux'
import userReducer from '@store/user/reducer'
import friendsReducer from '@store/friends/reducer'
import historyReducer from '@store/history/reducer'
import todosReducer from '@store/todos/reducer'
import signinReducer from '@store/auth/reducer'
import modalReducer from '@store/modal/reducer'

const reducers: { [key: string]: Reducer} = {
  user: userReducer,
  friends: friendsReducer,
  history: historyReducer,
  todos: todosReducer,
  signin: signinReducer,
  modal: modalReducer,
}

export default reducers
