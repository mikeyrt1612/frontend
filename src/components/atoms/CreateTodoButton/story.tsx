import React from 'react'
import { storiesOf } from '@storybook/react'

import CreateTodoButton from '.'

storiesOf('atoms/CreateTodoButton', module)
  .add('default', () => (
    <CreateTodoButton createTodo={() => {}} openModal={() => {}} />
  ))
