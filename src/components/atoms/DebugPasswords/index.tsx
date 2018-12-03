import React, { SFC } from 'react'
import { Label, Segment, Image, Container } from 'semantic-ui-react'

const userDetails = [
  {
    icon: 'https://i.imgur.com/gwy9tVn.png',
    name: 'luke',
    password: 'jedi123',
  },
  {
    icon: 'https://i.imgur.com/X3MfY8T.png',
    name: 'han',
    password: 'mfalcon',
  },
  {
    icon: 'https://i.imgur.com/zPhDCtz.png',
    name: 'leia',
    password: 'ilovehan',
  },
]

const DebugPasswords: SFC = () => (
  <Container textAlign="center">
      {
        userDetails.map(({ icon, name, password }) =>
          <Segment vertical basic key={name}>
            <Label color="blue" image>
              <Image size="mini" src={icon} />
                {name}
              <Label.Detail>{password}</Label.Detail>
            </Label>
          </Segment>,
        )
      }
  </Container>
)

DebugPasswords.displayName = 'DebugPasswords'

export default DebugPasswords
