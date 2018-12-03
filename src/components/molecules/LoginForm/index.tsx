import React, { Fragment, Component, SyntheticEvent } from 'react'
import {
  Form,
  Segment,
  Button,
  Message,
  InputOnChangeData,
} from 'semantic-ui-react'

export interface IStateProps {
  loading: boolean,
  errorMessage?: string,
}

export interface IDispatchProps {
  onSubmit: (username: string, password: string) => void,
}

export type IProps = IStateProps & IDispatchProps

interface IState {
  [key: string]: string,
}

class LoginForm extends Component<IProps, IState> {
  state = {
    username: '',
    password: '',
  }

  onChange = (event: SyntheticEvent<HTMLInputElement>, { name, value }: InputOnChangeData) => {
    this.setState({ [name]: value })
  }

  onSubmit = () => {
    const { username, password } = this.state
    const { onSubmit } = this.props
    onSubmit(username, password)
  }

  render() {
    const { loading, errorMessage } = this.props
    return (
      <Fragment>
        <Form
          error={!!errorMessage}
          loading={loading}
          onSubmit={this.onSubmit}
        >
          <Segment>
            <Form.Input
              autoFocus
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="username"
              error={!!errorMessage}
              onChange={this.onChange}
            />
            <Form.Input
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="password"
              type="password"
              error={!!errorMessage}
              onChange={this.onChange}
            />
            <Button type="submit" color="blue" fluid>Login</Button>
          </Segment>
        </Form>
        {!!errorMessage && !loading &&
          <Message
            error
            header="Error"
            content={errorMessage}
          />
        }
      </Fragment>
    )
  }
}

export default LoginForm
