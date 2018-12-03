import React, { SFC, Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Modal from '@components/containers/Modal'
import SignInPage from '@components/pages/SignInPage'
import HomePage from '@components/containers/HomePage'
import NotFoundPage from '@components/pages/NotFoundPage'
import ProtectedRoute from '@components/atoms/ProtectedRoute'

const App: SFC = () => (
  <Fragment>
    <Modal />
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/signin" component={SignInPage} />
      <ProtectedRoute path="/home" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Fragment>
)

App.displayName = 'App'

export default hot(module)(App)
