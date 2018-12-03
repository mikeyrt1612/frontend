import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { openModal } from '@store/modal/actions'
import { IModalConfig } from '@store/modal/model'
import { deleteTodosRequest } from '@store/todos/actions'
import DeleteTodoButton, { IDispatchProps } from '@components/atoms/DeleteTodoButton'

export interface IOwnProps {
  todoId: string,
}

export const mapDispatchToProps = (dispatch: Dispatch, { todoId }: IOwnProps): IDispatchProps => ({
  openModal: (data: IModalConfig) => { dispatch(openModal(data)) },
  deleteTodo: () => { dispatch(deleteTodosRequest({ todoId })) },
})

export default connect(undefined, mapDispatchToProps)(DeleteTodoButton)
