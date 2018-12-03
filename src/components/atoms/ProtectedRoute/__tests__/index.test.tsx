jest.mock('@services/api', () => ({
  updateToken: jest.fn(),
}))

import React from 'react'
import { shallow } from 'enzyme'
import { Route, Redirect } from 'react-router-dom'

import ProtectedRoute from '../'
import { updateToken } from '@services/api'

describe('<ProtectedRoute />', () => {
  test('should render the route if authenticated', () => {
    const mockToken = 'MOCK'
    localStorage.setItem('token', mockToken)
    const wrapper = shallow(<ProtectedRoute />)
    expect(updateToken).toHaveBeenCalledWith(mockToken)
    expect(wrapper.find(Route)).toExist()
  })

  test('should redirect to signin page if not authenticated', () => {
    localStorage.clear()
    const wrapper = shallow(<ProtectedRoute />)
    expect(wrapper.find(Redirect)).toExist()
    expect(wrapper.find(Redirect)).toHaveProp('to', '/signin')
  })
})
