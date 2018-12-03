import React, { SFC } from 'react'
import { Segment } from 'semantic-ui-react'

const NotFoundPage: SFC = () => (
  <Segment basic textAlign="center" size="huge">
    404 - Page not found
  </Segment>
)

NotFoundPage.displayName = 'NotFoundPage'

export default NotFoundPage
