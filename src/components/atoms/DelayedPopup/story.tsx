import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

import DelayedPopup from '.'

storiesOf('atoms/DelayedPopup', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DelayedPopup
      content="Magic!"
      trigger={<span>HOVER OVER ME</span>}
    />
  ))
  .add('custom delay', () => (
    <DelayedPopup
      delay={number('delay (ms)', 2000)}
      content="Magic!"
      trigger={<span>HOVER OVER ME</span>}
    />
  ))
