import React from 'react'
import { shallow, mount } from 'enzyme'
import { Menu, Image } from 'semantic-ui-react'

import NavBar from '../'
import DelayedPopup from '@components/atoms/DelayedPopup'
import CreateTodoButton from '@components/containers/CreateTodoButton'

const todosUrl = '/home/todos'
const historyUrl = '/home/history'
const signout = jest.fn()
const getNavBarWrapper = (pathname: string = '') =>
  shallow(
    <NavBar
      profileImage="MOCK"
      signout={signout}
      history={{} as any}
      match={{} as any}
      location={{ pathname } as any}
    />,
  )

describe('<NavBar />', () => {
  test('should have a create todo button', () => {
    const wrapper = getNavBarWrapper()
    expect(wrapper.find(CreateTodoButton)).toExist()
  })

  test('should display the avatar of the currently signed in user', () => {
    const wrapper = getNavBarWrapper()
    const link = wrapper.findWhere(e =>
      e.type() === Image && e.props().avatar,
    )
    expect(link).toHaveProp('src', 'MOCK')
  })

  test('should have a signout button', () => {
    const wrapper = getNavBarWrapper()
    const signoutDelayedPopup = wrapper.findWhere(e =>
      e.type() === DelayedPopup && e.props().content === 'Sign out',
    )
    const signoutTrigger = mount(signoutDelayedPopup.getElement())
    const signoutButton = signoutTrigger.find(Menu.Item)
    signoutButton.simulate('click')
    expect(signout).toHaveBeenCalled()
    signoutTrigger.unmount()
  })

  describe('todos page link', () => {
    test('should have a link to the todos page', () => {
      const wrapper = getNavBarWrapper()
      const link = wrapper.findWhere(e =>
        e.type() === Menu.Item && e.props().to === todosUrl,
      )
      expect(link).toExist()
    })

    test('should highlight todos link when on the todos page', () => {
      const wrapper = getNavBarWrapper(todosUrl)
      const link = wrapper.findWhere(e =>
        e.type() === Menu.Item && e.props().to === todosUrl,
      )
      expect(link).toExist()
      expect(link).toHaveProp('active')
    })
  })

  describe('history page link', () => {
    test('should have a link to the history page', () => {
      const wrapper = getNavBarWrapper()
      const link = wrapper.findWhere(e =>
        e.type() === Menu.Item && e.props().to === historyUrl,
      )
      expect(link).toExist()
    })

    test('should highlight history link when on the history page', () => {
      const wrapper = getNavBarWrapper(historyUrl)
      const link = wrapper.findWhere(e =>
        e.type() === Menu.Item && e.props().to === historyUrl,
      )
      expect(link).toExist()
      expect(link).toHaveProp('active')
    })
  })
})
