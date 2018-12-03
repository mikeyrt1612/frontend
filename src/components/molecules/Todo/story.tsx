import React from 'react'
import { storiesOf } from '@storybook/react'

import Todo from '.'
import storeDecorator from '@story/storeDecorator'

storiesOf('molecules/Todo', module)
  .addDecorator(storeDecorator)
  .add('default', () => (
    <Todo id="abc123" message="The brown fox jumped over the lazy dog" />
  ))
