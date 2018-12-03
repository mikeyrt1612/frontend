import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { IRootState } from '@store/model'
import { loadingSelector, friendsSelector } from '@store/friends/selectors'
import { IModalConfig } from '@store/Modal/model'
import { openModal } from '@store/modal/actions'
import { sendTodosRequest } from '@store/todos/actions'
import SendTodoDropdown, {
  IStateProps,
  IDispatchProps,
} from '@components/molecules/SendTodoDropdown'

export interface IOwnProps {
  todoId: string,
}

export const mapStateToProps = createStructuredSelector<IRootState, IStateProps>({
  loadingFriends: loadingSelector,
  friends: friendsSelector,
})

export const mapDispatchToProps = (dispatch: Dispatch, { todoId }: IOwnProps): IDispatchProps => ({
  openModal: (data: IModalConfig) => { dispatch(openModal(data)) },
  sendTodo: (recipientId: string) => { dispatch(sendTodosRequest({ todoId, recipientId })) },
})

export default connect(mapStateToProps, mapDispatchToProps)(SendTodoDropdown)
