import React from 'react'
import { mount } from 'enzyme'

import CreateTodoButton, { ItemColored } from '../'
import * as createTodoModal from '@modals/createTodo'

describe('<CreateTodoButton />', () => {
  test('should open a create todo modal when clicked', () => {
    const spy = jest.spyOn(createTodoModal, 'default').mockImplementation(() => {})
    const createTodo = jest.fn()
    const openModal = jest.fn()
    const wrapper = mount(<CreateTodoButton createTodo={createTodo} openModal={openModal} />)
    wrapper.find(ItemColored).simulate('click')
    expect(spy).toHaveBeenCalledWith(createTodo)
    expect(openModal).toHaveBeenCalledWith(createTodoModal.default(createTodo))
    spy.mockRestore()
    wrapper.unmount()
  })
})
