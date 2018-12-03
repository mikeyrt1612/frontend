import React from 'react'
import { mount } from 'enzyme'
import { Button } from 'semantic-ui-react'

import createTodo from '../createTodo'
import Modal from '@components/organisms/Modal'

const getWrapper = (callback: () => void = () => {}) =>
  mount(
    <Modal
      isOpen
      config={createTodo(callback)}
      closeModal={() => {}}
    />,
  )

describe('createTodo modal', () => {
  test('should set initial message value to empty string', () => {
    const wrapper = getWrapper()
    expect(wrapper).toHaveState({ data: { message: '' } })
    wrapper.unmount()
  })

  test('should pass message to createTodo callback when action clicked', () => {
    const mockMessage = 'MOCK'
    const callback = jest.fn()
    const wrapper = getWrapper(callback)

    // simulate entry into text area
    wrapper.setState({ data: { message: mockMessage } })

    const actionButton = wrapper.findWhere(e =>
      e.type() === Button && e.prop('primary'),
    )
    actionButton.simulate('click')
    expect(callback).toBeCalledWith(mockMessage)
    wrapper.unmount()
  })

  test('action button should be disabled when text area is empty', () => {
    const wrapper = getWrapper()
    let actionButton = wrapper.findWhere(e =>
      e.type() === Button && e.prop('primary'),
    )
    expect(actionButton).toHaveProp('disabled')

    // simulate entry into text area
    wrapper.setState({ data: { message: 'MOCK' } })

    actionButton = wrapper.findWhere(e =>
      e.type() === Button && e.prop('primary'),
    )
    expect(actionButton).toHaveProp('disabled')
    wrapper.unmount()
  })
})
