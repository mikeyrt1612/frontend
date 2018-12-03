import React from 'react'
import { shallow } from 'enzyme'
import dateFormat from 'dateformat'

import LabelDate, { Label } from '../'

describe('<LabelDate />', () => {
  test('should render the time (HH:MM) for todays date', () => {
    const date = (new Date()).toISOString()
    const wrapper = shallow(<LabelDate date={date} />)
    expect(wrapper.find(Label).dive()).toHaveText(dateFormat(date, 'HH:MM'))
  })

  test('should render as a date (mmm d) for anything before today', () => {
    const thePast = '2011-10-05T14:48:00.000Z'
    const wrapper = shallow(<LabelDate date={thePast} />)
    expect(wrapper.find(Label).dive()).toHaveText(dateFormat(thePast, 'mmm d'))
  })
})
