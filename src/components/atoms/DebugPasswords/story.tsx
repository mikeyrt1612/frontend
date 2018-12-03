import React from 'react'
import { storiesOf } from '@storybook/react'

import DebugPasswords from '.'

storiesOf('atoms/DebugPasswords', module)
  .add('default', () => (
    <DebugPasswords />
  ))
