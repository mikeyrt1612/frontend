import React from 'react'
import { storiesOf } from '@storybook/react'
import { withRouter } from 'react-router'

import routerDecorator from '@story/routerDecorator'
import storeDecorator from '@story/storeDecorator'
import NavBar from '.'

const NavBarWithRouter = withRouter(NavBar)

storiesOf('organisms/NavBar', module)
  .addDecorator(routerDecorator)
  .addDecorator(storeDecorator)
  .add('default', () => (
    <NavBarWithRouter
      profileImage="https://www.deshdoot.com/wp-content/uploads/2018/06/user.png"
      signout={() => {}}
    />
  ))
