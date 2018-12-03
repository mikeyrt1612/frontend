import React, { Component } from 'react'
import { Container, Loader as SemanticLoader, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import HistoryItem from '@components/molecules/HistoryItem'
import { IHistory, IHistoryItem } from '@store/history/model'

const InlineBlock = styled.div`
  display: inline-block;
`

export const Loader = styled(SemanticLoader)`
  top: 150px !important;
`

export interface IStateProps {
  loading: boolean,
  historyData: IHistory,
}

export interface IDispatchProps {
  getHistory: () => void,
}

type IProps = IStateProps & IDispatchProps

class HistoryPage extends Component<IProps> {
  componentWillMount() {
    const { getHistory } = this.props
    getHistory()
  }

  render() {
    const { historyData, loading } = this.props
    return (
      <Container textAlign="center">
        <InlineBlock>
          {loading &&
            <Loader active />
          }
          {!loading && historyData.length > 0 &&
            historyData.map((history: IHistoryItem, key: number) => (
              <HistoryItem
                key={key}
                actionType={history.actionType}
                instigatorName={history.instigator.name.full}
                created={history.created}
              />
            ))
          }
          {!loading && historyData.length === 0 &&
            <Segment>
              No history
            </Segment>
          }
        </InlineBlock>
      </Container>
    )
  }
}

export default HistoryPage
