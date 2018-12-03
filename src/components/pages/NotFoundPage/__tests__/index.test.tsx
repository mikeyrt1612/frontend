import React from 'react'
import { shallow } from 'enzyme'
import { Segment } from 'semantic-ui-react'

import NotFoundPage from '../'

const errorMessage = '404 - Page not found'

describe('<NotFoundPage />', () => {
  test(`should display the text "${errorMessage}"`, () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper.find(Segment).childAt(0)).toHaveText(errorMessage)
  })
})
