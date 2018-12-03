import React from 'react'
import { storiesOf } from '@storybook/react'

import HistoryItem from '.'
import { EActionType } from '@services/api/history/model'

storiesOf('molecules/HistoryItem', module)
.add('sent', () => (
  <HistoryItem
    actionType={EActionType.SENT}
    instigatorName="Michael Thomas"
    created="1995-12-17T03:24:00"
  />
))
.add('received', () => (
  <HistoryItem
    actionType={EActionType.RECEIVED}
    instigatorName="Michael Thomas"
    created="1995-12-17T03:24:00"
  />
))
  .add('created', () => (
    <HistoryItem
      actionType={EActionType.CREATED}
      instigatorName=""
      created="1995-12-17T03:24:00"
    />
  ))
  .add('deleted', () => (
    <HistoryItem
      actionType={EActionType.DELETED}
      instigatorName=""
      created="1995-12-17T03:24:00"
    />
  ))
