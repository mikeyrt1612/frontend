import React from 'react'
import { storiesOf } from '@storybook/react'

import DeleteButton from '.'

storiesOf('atoms/DeleteButton', module)
  .add('default', () => (
    <DeleteButton deleteTodo={() => {}} openModal={() => {}} />
  ))
