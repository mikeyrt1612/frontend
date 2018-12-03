import React from 'react'
import { shallow } from 'enzyme'
import { Label, Reveal } from 'semantic-ui-react'

import SignInPage from '../'
import LoginForm from '@components/containers/LoginForm'

describe('<SignInPage />', () => {
  test('should have a LoginForm', () => {
    const wrapper = shallow(<SignInPage />)
    expect(wrapper.find(LoginForm)).toExist()
  })

  test('should reveal password on mouseover of reveal label', () => {
    const wrapper = shallow(<SignInPage />)
    expect(wrapper.find(Reveal).prop('active')).toBe(false)
    wrapper.find(Label).simulate('mouseover')
    expect(wrapper.find(Reveal).prop('active')).toBe(true)
  })
})
