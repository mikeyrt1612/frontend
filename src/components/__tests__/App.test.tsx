import React from 'react'
import { shallow } from 'enzyme'
import { Switch, Route, Redirect } from 'react-router-dom'

import App from '../App'
import Modal from '@components/containers/Modal'
import SignInPage from '@components/pages/SignInPage'
import HomePage from '@components/containers/HomePage'
import NotFoundPage from '@components/pages/NotFoundPage'
import ProtectedRoute from '@components/atoms/ProtectedRoute'

const getWrapper = () =>
  shallow(
    <App />,
  )

describe('<App />', () => {
  test('should contain a Modal', () => {
    expect(getWrapper().find(Modal)).toExist()
  })

  describe('Routes', () => {
    test('should redirect from / to /home', () => {
      const route = getWrapper().find(Switch).findWhere(route =>
        route.is(Redirect) &&
        route.prop('exact') &&
        route.prop('from') === '/' &&
        route.prop('to') === '/home',
      )
      expect(route).toExist()
    })

    test('should use the SigninPage for /signin', () => {
      const route = getWrapper().find(Switch).findWhere(route =>
        route.is(Route) &&
        route.prop('path') === '/signin' &&
        route.prop('component') === SignInPage,
      )
      expect(route).toExist()
    })

    test('should use the HomePage for the protected route /home', () => {
      const route = getWrapper().find(Switch).findWhere(route =>
        route.is(ProtectedRoute) &&
        route.prop('path') === '/home' &&
        route.prop('component') === HomePage,
      )
      expect(route).toExist()
    })

    test('should use the NotFoundPage for all other routes', () => {
      const route = getWrapper().find(Switch).findWhere(route =>
        route.is(Route) &&
        route.prop('component') === NotFoundPage,
      )
      expect(route).toExist()
    })
  })
})
