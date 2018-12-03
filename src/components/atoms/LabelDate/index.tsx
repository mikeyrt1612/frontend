import React, { SFC } from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'

export const Label = styled.span`
  color: #ccc;
`

interface IProps {
  date: string,
}

const isToday = (date: string) => {
  const now = new Date()
  const jsDate = new Date(date)
  return now.toDateString() === jsDate.toDateString()
}

const LabelDate: SFC<IProps> = ({ date }) => (
  <Label>
    {
      isToday(date)
      ?
      dateFormat(date, 'HH:MM')
      :
      dateFormat(date, 'mmm d')
    }
  </Label>
)

LabelDate.displayName = 'LabelDate'

export default LabelDate
