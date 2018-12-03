import React from 'react'
import { shallow } from 'enzyme'

import Todo, { Lines } from '../'
import SendTodoDropdown from '@components/containers/SendTodoDropdown'
import DeleteTodoButton from '@components/containers/DeleteTodoButton'

const mockId = 'MOCK ID'
const mockMessage = 'MOCK MESSAGE'

describe('<Todo />', () => {
  test('should display the message', () => {
    const wrapper = shallow(<Todo id={mockId} message={mockMessage} />)
    expect(wrapper.find(Lines)).toExist()
    expect(wrapper.find(Lines).dive().childAt(0)).toHaveText(mockMessage)
  })

  test('should have a send dropdown button', () => {
    const wrapper = shallow(<Todo id={mockId} message={mockMessage} />)
    expect(wrapper.find(SendTodoDropdown)).toExist()
    expect(wrapper.find(SendTodoDropdown)).toHaveProp('todoId', mockId)
  })

  test('should have a delete button', () => {
    const wrapper = shallow(<Todo id={mockId} message={mockMessage} />)
    expect(wrapper.find(DeleteTodoButton)).toExist()
    expect(wrapper.find(DeleteTodoButton)).toHaveProp('todoId', mockId)
  })
})
