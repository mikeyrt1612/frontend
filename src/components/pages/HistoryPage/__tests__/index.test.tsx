import React from 'react'
import { shallow, mount } from 'enzyme'

import HistoryPage, { Loader } from '../'
import HistoryItem from '@components/molecules/HistoryItem'
import { historyMockData } from '@services/api/history/__mocks__'

describe('<HistoryPage />', () => {
  test('should show a spinner when the page is loading', () => {
    const wrapper = shallow(
      <HistoryPage
        loading
        historyData={[]}
        getHistory={() => {}}
      />,
    )
    expect(wrapper.find(Loader).dive()).toExist()
  })

  test('should retrieve history data on mount', () => {
    const getHistory = jest.fn()
    const wrapper = mount(
      <HistoryPage
        loading
        historyData={[]}
        getHistory={getHistory}
      />,
    )
    expect(getHistory).toHaveBeenCalled()
    wrapper.unmount()
  })

  test('should display a history element for each element in IHistory prop', () => {
    const wrapper = shallow(
      <HistoryPage
        loading={false}
        historyData={historyMockData}
        getHistory={() => {}}
      />,
    )
    expect(wrapper.find(HistoryItem).getElements()).toHaveLength(historyMockData.length)
  })

  test('should display a "No history" when no history items exist', () => {
    const wrapper = shallow(
      <HistoryPage
        loading={false}
        historyData={[]}
        getHistory={() => {}}
      />,
    )
    expect(wrapper.contains('No history')).toBeTruthy()
  })
})
