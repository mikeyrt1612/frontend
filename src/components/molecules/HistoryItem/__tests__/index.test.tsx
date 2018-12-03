import React, { Fragment, cloneElement } from 'react'
import { shallow } from 'enzyme'
import { Icon } from 'semantic-ui-react'
import renderer from 'react-test-renderer'

import HistoryItem, { StatementContainer } from '../'
import LabelDate from '@components/atoms/LabelDate'
import { EActionType } from '@services/api/history/model'

const mockDate = (new Date()).toISOString()

const getHistoryItemWrapper = (actionType: EActionType) =>
  shallow(
    <HistoryItem
      actionType={actionType}
      instigatorName="MOCK NAME"
      created={mockDate}
    />,
  )

const expectStatementToMatchSnapshot = (actionType: EActionType) => {
  const wrapper = getHistoryItemWrapper(actionType)
  const statement = wrapper.find(StatementContainer)
  const keyedStatements = statement.children().map((e, i) =>
    cloneElement(e.getElement(), { key: i }),
  )
  const tree = renderer.create(
    <Fragment>
      {keyedStatements}
    </Fragment>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
}

describe('<HistoryItem />', () => {
  test('should render the date', () => {
    const wrapper = getHistoryItemWrapper(EActionType.CREATED)
    expect(wrapper.find(LabelDate)).toExist()
    expect(wrapper.find(LabelDate)).toHaveProp('date', mockDate)
  })

  describe('created item', () => {
    test('should have the created icon', () => {
      const wrapper = getHistoryItemWrapper(EActionType.CREATED)
      expect(wrapper.find(Icon)).toExist()
      expect(wrapper.find(Icon)).toHaveProp('name', 'checkmark')
    })

    test('should contain the created message', () => {
      expectStatementToMatchSnapshot(EActionType.CREATED)
    })
  })

  describe('deleted item', () => {
    test('should have the deleted icon', () => {
      const wrapper = getHistoryItemWrapper(EActionType.DELETED)
      expect(wrapper.find(Icon)).toExist()
      expect(wrapper.find(Icon)).toHaveProp('name', 'delete')
    })

    test('should contain the deleted message', () => {
      expectStatementToMatchSnapshot(EActionType.DELETED)
    })
  })

  describe('sent item', () => {
    test('should have the sent icon', () => {
      const wrapper = getHistoryItemWrapper(EActionType.SENT)
      expect(wrapper.find(Icon)).toExist()
      expect(wrapper.find(Icon)).toHaveProp('name', 'send')
    })

    test('should contain the sent message', () => {
      expectStatementToMatchSnapshot(EActionType.SENT)
    })
  })

  describe('recieved item', () => {
    test('should have the recieved icon', () => {
      const wrapper = getHistoryItemWrapper(EActionType.RECEIVED)
      expect(wrapper.find(Icon)).toExist()
      expect(wrapper.find(Icon)).toHaveProp('name', 'mail')
    })

    test('should contain the recieved message', () => {
      expectStatementToMatchSnapshot(EActionType.RECEIVED)
    })
  })
})
