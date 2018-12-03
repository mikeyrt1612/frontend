import React, { SFC } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

import DelayedPopup from '@components/atoms/DelayedPopup'
import { IModalConfig } from '@store/modal/model'
import createTodoModal from '@modals/createTodo'

export const ItemColored = styled(Menu.Item)`
  color: ${props => props.color} !important;
`

interface IContentData {
  message: string,
}

export interface IProps {
  openModal: (data: IModalConfig<IContentData>) => void,
  createTodo: (message: string) => void,
}

const CreateTodoButton: SFC<IProps> = ({ openModal, createTodo }) => (
  <DelayedPopup
    content="Create todo"
    trigger={
      <ItemColored
        as="a"
        icon="plus"
        color="green"
        onClick={() => { openModal(createTodoModal(createTodo)) }}
      />
    }
  />
)

CreateTodoButton.displayName = 'CreateTodoButton'

export default CreateTodoButton
