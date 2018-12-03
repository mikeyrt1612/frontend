import React from 'react'
import { shallow } from 'enzyme'
import { Button, Form, Message } from 'semantic-ui-react'

import LoginForm, { IProps } from '../'

const getWrapper = ({
  loading = false,
  errorMessage = undefined,
  onSubmit = () => {},
}: Partial<IProps> = {}) =>
  shallow(
    <LoginForm
      loading={loading}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
    />,
  )

describe('<LoginForm />', () => {
  test('should autofocus username field', () => {
    const wrapper = getWrapper()
    expect(wrapper.findWhere(e => e.prop('autoFocus'))).toHaveLength(1)
    expect(wrapper.findWhere(e =>
      e.type() === Form.Input && e.prop('autoFocus') && e.prop('name') === 'username',
    )).toExist()
  })

  test('should show a spinner when loading', () => {
    const wrapper = getWrapper({ loading: true })
    expect(wrapper.find(Form).dive()).toHaveClassName('loading')
  })

  test('should have a username field with a username icon', () => {
    const wrapper = getWrapper()
    expect(wrapper.findWhere(e =>
      e.type() === Form.Input && e.prop('name') === 'username' && e.prop('icon') === 'user',
    )).toExist()
  })

  test('should have password field with password icon', () => {
    const wrapper = getWrapper()
    expect(wrapper.findWhere(e =>
      e.type() === Form.Input &&
      e.prop('name') === 'password' &&
      e.prop('icon') === 'lock' &&
      e.prop('type') === 'password',
    )).toExist()
  })

  test('should send username and password to callback when submit clicked', () => {
    const mockUsername = 'MOCK_USERNAME'
    const mockPassword = 'MOCK_PASSWORD'
    const submitCallback = jest.fn()
    const wrapper = getWrapper({ onSubmit: submitCallback })
    wrapper.setState({ username: mockUsername, password: mockPassword })

    const form = wrapper.find(Form)
    expect(form).toExist()

    const submitButton = form.findWhere(e =>
      e.type() === Button && e.prop('type') === 'submit',
    )
    expect(submitButton).toExist()

    form.simulate('submit')
    expect(submitCallback).toHaveBeenCalledWith(mockUsername, mockPassword)

  })

  describe('errors', () => {
    test('should show no errors when errorMessage is undefined', () => {
      const wrapper = getWrapper()
      const elementsWithError = wrapper.findWhere(e => e.prop('error'))
      expect(elementsWithError).not.toExist()
    })

    test('form should have error state when errorMessage is defined', () => {
      const wrapper = getWrapper({ errorMessage: 'MOCK' })
      expect(wrapper.find(Form)).toHaveProp('error')
    })

    test('should have error state on all input fields when errorMessage is defined', () => {
      const wrapper = getWrapper({ errorMessage: 'MOCK' })
      const usernameField = wrapper.findWhere(e =>
        e.type() === Form.Input && e.prop('name') === 'username',
      )
      const passwordField = wrapper.findWhere(e =>
        e.type() === Form.Input && e.prop('name') === 'password',
      )
      expect(usernameField).toHaveProp('error')
      expect(passwordField).toHaveProp('error')
    })

    test('should show error message beneath form when it\'s defined', () => {
      const mockErrorMessage = 'MOCK'
      const wrapper = getWrapper({ errorMessage: mockErrorMessage })
      const errorMessage = wrapper.findWhere(e =>
        e.type() === Message &&
        e.prop('error') &&
        e.prop('header') === 'Error' &&
        e.prop('content') === mockErrorMessage,
      )
    })
  })
})
