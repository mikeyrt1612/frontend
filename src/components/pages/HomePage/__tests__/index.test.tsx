import React from 'react'
import { shallow } from 'enzyme'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from '../'
import TodosPage from '@components/containers/TodosPage'
import NavBar from '@components/containers/NavBar'
import HistoryPage from '@components/containers/HistoryPage'
import NotFoundPage from '@components/pages/NotFoundPage'

const getWrapper = (refreshData: () => void = () => {}) =>
  shallow(
    <HomePage
      refreshData={refreshData}
      history={{} as any}
      location={{} as any}
      match={{
        url: 'MOCK',
      } as any}
    />,
  )

describe('<HomePage />', () => {
  test('should contain a nav bar', () => {
    expect(getWrapper().find(NavBar)).toExist()
  })

  test('should refresh the data on mount', () => {
    const refreshData = jest.fn()
    getWrapper(refreshData)
    expect(refreshData).toHaveBeenCalledTimes(1)
  })

  describe('Routes', () => {
    test('should redirect from / to /todos', () => {
      const route = getWrapper().find(Switch).findWhere(route =>
        route.is(Redirect) &&
        route.prop('exact') &&
        route.prop('from') === 'MOCK' &&
        route.prop('to') === 'MOCK/todos',
      )
      expect(route).toExist()
    })

    test('should use the TodosPage for /todos', () => {
      const route = getWrapper().find(Switch).findWhere(route =>
        route.is(Route) &&
        route.prop('exact') &&
        route.prop('path') === 'MOCK/todos' &&
        route.prop('component') === TodosPage,
      )
      expect(route).toExist()
    })

    test('should use the HistoryPage for /history', () => {
      const route = getWrapper().find(Switch).findWhere(route =>
        route.is(Route) &&
        route.prop('exact') &&
        route.prop('path') === 'MOCK/history' &&
        route.prop('component') === HistoryPage,
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
