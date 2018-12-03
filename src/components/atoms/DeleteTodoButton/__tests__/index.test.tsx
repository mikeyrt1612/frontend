import React from 'react'
import { mount } from 'enzyme'
import { Button } from 'semantic-ui-react'

import DeleteTodoButton from '../'
import * as deleteTodoModal from '@modals/deleteTodo'

describe('<DeleteTodoButton />', () => {
  test('should open a delete todo modal when clicked', () => {
    const spy = jest.spyOn(deleteTodoModal, 'default').mockImplementation(() => {})
    const deleteTodo = jest.fn()
    const openModal = jest.fn()
    const wrapper = mount(<DeleteTodoButton deleteTodo={deleteTodo} openModal={openModal} />)
    wrapper.find(Button).simulate('click')
    expect(spy).toHaveBeenCalledWith(deleteTodo)
    expect(openModal).toHaveBeenCalledWith(deleteTodoModal.default(deleteTodo))
    spy.mockRestore()
    wrapper.unmount()
  })
})
