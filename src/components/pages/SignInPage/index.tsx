import React, { Component } from 'react'
import { Grid as SemanticGrid, Reveal, Label, Icon, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import LoginForm from '@components/containers/LoginForm'
import DebugPasswords from '@components/atoms/DebugPasswords'

const Grid = styled(SemanticGrid)`
  height: 100%;
`

const Column = styled(SemanticGrid.Column)`
  max-width: 262px;
`

interface IState {
  revealPasswords: boolean,
}

class SignInPage extends Component<{}, IState> {
  state = {
    revealPasswords: false,
  }

  revealPasswords = (show: boolean) => {
    this.setState({ revealPasswords: show })
  }

  render() {
    const { revealPasswords } = this.state
    return (
      <Grid verticalAlign="middle" centered>
        <Column>
          <Reveal animated="move down" disabled active={revealPasswords}>
            <Reveal.Content visible>
              <LoginForm />
            </Reveal.Content>
            <Reveal.Content hidden>
              <DebugPasswords />
            </Reveal.Content>
          </Reveal>
          <Segment basic textAlign="center" padded={false}>
            <Label
              size="tiny"
              onMouseOver={() => { this.revealPasswords(true) }}
              onMouseOut={() => { this.revealPasswords(false) }}
            >
              <Icon name={revealPasswords ? 'unlock' : 'lock'} /> Reveal passwords
            </Label>
          </Segment>
        </Column>
      </Grid>
    )
  }
}

export default SignInPage
