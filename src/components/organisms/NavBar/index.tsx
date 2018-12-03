import React, { SFC } from 'react'
import { Menu, Container, Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import DelayedPopup from '@components/atoms/DelayedPopup'
import CreateTodoButton from '@components/containers/CreateTodoButton'

export interface IStateProps {
  profileImage: string,
}

export interface IDispatchProps {
  signout: () => void,
}

export interface IProps extends IStateProps, IDispatchProps, RouteComponentProps<{}> {  }

const NavBar: SFC<IProps> = ({ location: { pathname }, profileImage, signout }) => (
  <Menu inverted fixed="top">
    <Container>
      <CreateTodoButton />
      <Menu.Item
        as={Link}
        to="/home/todos"
        name="todos"
        active={pathname === '/home/todos'}
      />
      <Menu.Item
        as={Link}
        to="/home/history"
        name="history"
        active={pathname === '/home/history'}
      />
      <Container>
        <Segment basic size="mini" vertical floated="right">
          <Image
            avatar
            src={profileImage}
          />
        </Segment>
      </Container>
      <DelayedPopup
        content="Sign out"
        trigger={
          <Menu.Item
            position="right"
            icon="sign-out"
            onClick={signout}
          />
        }
      />
    </Container>
  </Menu>
)

NavBar.displayName = 'NavBar'

export default NavBar
