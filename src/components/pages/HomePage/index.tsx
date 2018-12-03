import React, { Fragment, Component } from 'react'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { Container as SemanticContainer, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import TodosPage from '@components/containers/TodosPage'
import NavBar from '@components/containers/NavBar'
import HistoryPage from '@components/containers/HistoryPage'
import NotFoundPage from '@components/pages/NotFoundPage'

const Container = styled(SemanticContainer)`
  padding-top: 5rem;
  padding-bottom: 1rem;
`

export interface IDispatchProps {
  refreshData: () => void,
}

export interface IProps extends IDispatchProps, RouteComponentProps<{}> {  }

class HomePage extends Component<IProps> {
  componentDidMount() {
    const { refreshData } = this.props
    refreshData()
  }

  render() {
    const { match: { url } } = this.props
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Segment basic>
            <Switch>
              <Redirect exact from={url} to={`${url}/todos`} />
              <Route exact path={`${url}/todos`} component={TodosPage} />
              <Route exact path={`${url}/history`} component={HistoryPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Segment>
        </Container>
      </Fragment>
    )
  }
}

export default HomePage
