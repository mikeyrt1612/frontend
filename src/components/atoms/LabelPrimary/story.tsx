import React from 'react'
import { storiesOf } from '@storybook/react'

import LabelPrimary from '.'

storiesOf('atoms/LabelPrimary', module)
  .add('default', () => (
    <LabelPrimary text="This is some primary text" />
  ))
