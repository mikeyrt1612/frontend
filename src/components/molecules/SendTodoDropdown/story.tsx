import React from 'react'
import { storiesOf } from '@storybook/react'

import SendTodoDropdown from '.'

const mockFriends = [
  {
    _id: 'abc123',
    name: {
      first: 'Peter',
      last: 'Parker',
      full: 'Peter Parker',
    },
    profileImage: 'https://www.deshdoot.com/wp-content/uploads/2018/06/user.png',
  },
  {
    _id: 'def456',
    name: {
      first: 'Mary',
      last: 'Jane',
      full: 'Mary Jane',
    },
    // tslint:disable-next-line:max-line-length
    profileImage: 'https://png2.kisspng.com/20180402/yie/kisspng-computer-icons-female-user-profile-avatar-material-5ac1fa22a5a567.4501855215226619226785.png',
  },
]

storiesOf('molecules/SendTodoDropdown', module)
  .add('loading friends', () => (
    <SendTodoDropdown
      loadingFriends={true}
      friends={[]}
      sendTodo={() => {}}
      openModal={() => {}}
    />
  ))
  .add('friends', () => (
    <SendTodoDropdown
      loadingFriends={false}
      friends={mockFriends}
      sendTodo={() => {}}
      openModal={() => {}}
    />
  ))
  .add('no friends', () => (
    <SendTodoDropdown
      loadingFriends={false}
      friends={[]}
      sendTodo={() => {}}
      openModal={() => {}}
    />
  ))
