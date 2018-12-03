import React, { Component, Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { RouteProps } from 'react-router'
import { updateToken } from '@services/api'

interface IState {
  token: string | null,
}

class ProtectedRoute extends Component<RouteProps, IState> {
  componentWillMount() {
    const token = localStorage.getItem('token')
    updateToken(token)
    this.setState({ token })
  }

  render() {
    const { token } = this.state
    return (
      <Fragment>
        {
          token
          ?
          <Route {...this.props} />
          :
          <Redirect to="/signin" />
        }
      </Fragment>
    )
  }
}

export default ProtectedRoute
