import React, { Component } from 'react'
import { Card, Loader as SemanticLoader, Segment, Container } from 'semantic-ui-react'
import styled from 'styled-components'

import Todo from '@components/molecules/Todo'
import { ITodos } from '@store/todos/model'

export const Loader = styled(SemanticLoader)`
  top: 150px !important;
`

export interface IStateProps {
  loading: boolean,
  todos: ITodos,
}

export interface IDispatchProps {
  getTodos: () => void,
}

type IProps = IStateProps & IDispatchProps

class TodosPage extends Component<IProps> {
  componentDidMount() {
    const { getTodos } = this.props
    getTodos()
  }

  render() {
    const { todos, loading } = this.props
    return (
      <Container textAlign="center">
        {loading &&
          <Loader active />
        }
        {!loading && todos.length > 0 &&
          <Card.Group centered>
            {
              todos.map(({ _id, message }) => (
                <Todo key={_id} id={_id} message={message} />
              ))
            }
          </Card.Group>
        }
        {!loading && todos.length === 0 &&
          <Segment style={{ display: 'inline-block' }}>
            No todos
          </Segment>
        }
      </Container>
    )
  }
}
export default TodosPage
