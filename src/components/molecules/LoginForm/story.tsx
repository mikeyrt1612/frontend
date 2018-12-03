import React from 'react'
import { storiesOf } from '@storybook/react'

import LoginForm from '.'

const onSubmit = (username: string, password: string) => {
  console.log(`username = ${username}`, `password = ${password}`)
}

storiesOf('molecules/LoginForm', module)
  .add('default', () => (
    <LoginForm
      loading={false}
      onSubmit={onSubmit}
    />
  ))
  .add('error message', () => (
    <LoginForm
      loading={false}
      errorMessage="Oops... Something seems to have gone wrong."
      onSubmit={onSubmit}
    />
  ))
  .add('loading', () => (
    <LoginForm
      loading
      onSubmit={onSubmit}
    />
  ))
