import React, { SFC, Fragment } from 'react'
import { Button } from 'semantic-ui-react'

import DelayedPopup from '@components/atoms/DelayedPopup'
import { IModalConfig } from '@store/modal/model'
import deleteTodoModal from '@modals/deleteTodo'

export interface IDispatchProps {
  openModal: (data: IModalConfig) => void,
  deleteTodo: () => void,
}

export type IProps = IDispatchProps

const DeleteTodoButton: SFC<IProps> = ({ deleteTodo, openModal }) => (
  <Fragment>
    <DelayedPopup
      content="Delete"
      trigger={
        <Button
          icon="close"
          negative
          compact
          basic
          onClick={() => { openModal(deleteTodoModal(deleteTodo)) }}
        />
      }
    />
  </Fragment>
)

DeleteTodoButton.displayName = 'DeleteTodoButton'

export default DeleteTodoButton
