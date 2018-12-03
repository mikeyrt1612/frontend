import React from 'react'
import { shallow, mount } from 'enzyme'

import TodosPage, { Loader } from '../'
import Todo from '@components/molecules/Todo'
import { todosMockData } from '@services/api/todos/__mocks__'

describe('<TodosPage />', () => {
  test('should show a spinner when the page is loading', () => {
    const wrapper = shallow(
      <TodosPage
        loading
        todos={[]}
        getTodos={() => {}}
      />,
    )
    expect(wrapper.find(Loader).dive()).toExist()
  })

  test('should retrieve todos data on mount', () => {
    const getTodos = jest.fn()
    const wrapper = mount(
      <TodosPage
        loading
        todos={[]}
        getTodos={getTodos}
      />,
    )
    expect(getTodos).toHaveBeenCalled()
    wrapper.unmount()
  })

  test('should display a todo element for each element in ITodos prop', () => {
    const wrapper = shallow(
      <TodosPage
        loading={false}
        todos={todosMockData}
        getTodos={() => {}}
      />,
    )
    expect(wrapper.find(Todo).getElements()).toHaveLength(todosMockData.length)
  })

  test('should display a "No todos" when no todos exist', () => {
    const wrapper = shallow(
      <TodosPage
        loading={false}
        todos={[]}
        getTodos={() => {}}
      />,
    )
    expect(wrapper.contains('No todos')).toBeTruthy()
  })
})
