import React from 'react'
import { shallow } from 'enzyme'

import LabelPrimary, { Label } from '../'

describe('<LabelPrimary />', () => {
  test('should render the passed string', () => {
    const wrapper = shallow(<LabelPrimary text="MOCK" />)
    expect(wrapper.find(Label).dive()).toHaveText('MOCK')
  })
})
