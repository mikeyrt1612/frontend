import React, { SFC } from 'react'
import styled from 'styled-components'

export const Label = styled.span`
  color: #1678c2;
  font-weight: bold;
`

interface IProps {
  text: string,
}

const LabelPrimary: SFC<IProps> = ({ text }) => (
  <Label>
    {text}
  </Label>
)

LabelPrimary.displayName = 'LabelPrimary'

export default LabelPrimary
