import React, { Fragment, SFC } from 'react'
import { Icon, Segment, IconProps } from 'semantic-ui-react'
import styled from 'styled-components'

import LabelPrimary from '@components/atoms/LabelPrimary'
import LabelDate from '@components/atoms/LabelDate'
import { EActionType } from '@services/api/history/model'

export const StatementContainer = styled.span`
  margin-left: 15px !important;
  margin-right: 15px !important;
`

const iconProps: IconProps = {
  [EActionType.SENT]: {
    name: 'send',
  },
  [EActionType.RECEIVED]: {
    name: 'mail',
  },
  [EActionType.CREATED]: {
    name: 'checkmark',
  },
  [EActionType.DELETED]: {
    name: 'delete',
  },
}

const getHistoryTypeStatement = (type: EActionType, name: string) => {
  switch (type) {
    case EActionType.CREATED:
      return (
        <span>You created a new todo</span>
      )
    case EActionType.DELETED:
      return (
        <span>You deleted a todo</span>
      )
    case EActionType.SENT:
      return (
        <Fragment>
          <span>You sent a todo to </span>
          <LabelPrimary text={name} />
        </Fragment>
      )
    case EActionType.RECEIVED:
      return (
        <Fragment>
          <span>You received a todo from </span>
          <LabelPrimary text={name} />
        </Fragment>
      )
  }
}

interface IProps {
  actionType: EActionType,
  instigatorName: string,
  created: string,
}

const HistoryItem: SFC<IProps> = ({ actionType, instigatorName, created }) => (
  <Segment compact>
    <Icon {...iconProps[actionType]} size="large" />
    <StatementContainer>
      {getHistoryTypeStatement(actionType, instigatorName)}
    </StatementContainer>
    <LabelDate date={created} />
  </Segment>
)

HistoryItem.displayName = 'HistoryItem'

export default HistoryItem
