import React, { SFC } from 'react'
import { Button, Card, Container, Header } from 'semantic-ui-react'
import styled from 'styled-components'

import DeleteTodoButton from '@components/containers/DeleteTodoButton'
import SendTodoDropdown from '@components/containers/SendTodoDropdown'

const Postit = styled(Card.Content)`
  background-color: #ff9 !important;
`

export const Lines = styled(Header)`
  margin-bottom: 20px !important;
  background: repeating-linear-gradient(0deg, #dd9, #dd9 1px, #ff9 1px, #ff9 23px);
`

interface IProps {
  id: string,
  message: string,
}

const Todo: SFC<IProps> = ({ id, message }) => (
  <Card raised>
    <Postit>
      <Container textAlign="right">
        <Button.Group
          size="small"
          compact
        >
          <SendTodoDropdown todoId={id}/>
          <DeleteTodoButton todoId={id} />
        </Button.Group>
      </Container>
      <Lines textAlign="left">
        {message}
      </Lines>
    </Postit>
  </Card>
)

Todo.displayName = 'Todo'

export default Todo
