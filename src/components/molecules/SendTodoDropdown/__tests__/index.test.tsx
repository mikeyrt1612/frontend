jest.mock('@modals/sendTodo', () =>
  jest.fn((fullName: string, sendTodo: ISendTodo, id: string) => ({
    fullName, sendTodo, id,
  })),
)

import React from 'react'
import { mount } from 'enzyme'
import { Dropdown, Loader } from 'semantic-ui-react'

import SendTodoDropdown, { IProps } from '../'
import { friendsMockData } from '@services/api/friends/__mocks__'
import sendTodoModal, { ISendTodo } from '@modals/sendTodo'

const openModal = jest.fn()
const sendTodo = jest.fn()

const getSendTodoDropdownWrapper = ({
  loadingFriends = false,
  friends = friendsMockData,
}: Partial<IProps> = {}) =>
    mount(
      <SendTodoDropdown
        loadingFriends={loadingFriends}
        friends={friends}
        openModal={openModal}
        sendTodo={sendTodo}
      />,
    )

describe('<SendTodoDropdown />', () => {
  test('should show spinner when loading', () => {
    const wrapper = getSendTodoDropdownWrapper({ loadingFriends: true })
    wrapper.find(Dropdown).simulate('click')
    expect(wrapper.find(Loader)).toExist()
    wrapper.unmount()
  })

  test('should show "No friends" when you have no friends :(', () => {
    const wrapper = getSendTodoDropdownWrapper({ friends: [] })
    wrapper.find(Dropdown).simulate('click')
    expect(wrapper.find(Dropdown.Item)).toHaveLength(1)
    expect(wrapper.find(Dropdown.Item)).toHaveProp('content', 'No friends')
    wrapper.unmount()
  })

  test('should show a list item for every friend in data when clicked', () => {
    const wrapper = getSendTodoDropdownWrapper()
    wrapper.find(Dropdown).simulate('click')
    expect(wrapper.find(Dropdown.Item)).toHaveLength(3)
    wrapper.unmount()
  })

  test('should display each list item with friends avatar and name', () => {
    const wrapper = getSendTodoDropdownWrapper()
    wrapper.find(Dropdown).simulate('click')
    const friends = wrapper.find(Dropdown.Item)
    friends.forEach((friend, index) => {
      const { profileImage, name: { full } } = friendsMockData[index]
      expect(friend).toHaveProp('content', full)
      expect(friend).toHaveProp('image', { avatar: true, src: profileImage })
    })
    wrapper.unmount()
  })

  test('should open a sendTodos modal when a friend is clicked', () => {
    const wrapper = getSendTodoDropdownWrapper()
    wrapper.find(Dropdown).simulate('click')
    const friends = wrapper.find(Dropdown.Item)
    friends.forEach((friend, index) => {
      const { _id, name: { full } } = friendsMockData[index]
      friend.simulate('click')
      expect(openModal).toHaveBeenCalledTimes(1)
      expect(openModal).toHaveBeenCalledWith(sendTodoModal(full, sendTodo, _id))
      openModal.mockClear()
    })
    wrapper.unmount()
  })
})
