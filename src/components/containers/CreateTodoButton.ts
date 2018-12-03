import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { postTodosRequest } from '@store/todos/actions'
import CreateTodoButton, { IProps } from '@components/atoms/CreateTodoButton'
import { IModalConfig } from '@store/modal/model'
import { openModal } from '@store/modal/actions'

export const mapDispatchToProps = (dispatch: Dispatch): IProps => ({
  openModal: (data: IModalConfig) => { dispatch(openModal(data)) },
  createTodo: (message: string) => { dispatch(postTodosRequest({ message })) },
})

export default connect(undefined, mapDispatchToProps)(CreateTodoButton)
