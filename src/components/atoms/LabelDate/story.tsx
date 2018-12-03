import React from 'react'
import { storiesOf } from '@storybook/react'

import LabelDate from '.'

storiesOf('atoms/LabelDate', module)
  .add('today', () => (
    <LabelDate date={(new Date()).toISOString()} />
  ))
  .add('before today', () => (
    <LabelDate date="1995-12-17T03:24:00" />
  ))
