import styled from 'styled-components'
import uuid from 'react-uuid'

import { ContentAnimation } from '../utils/ContentAnimation'
import { indicatorData } from '../utils/IndicatorData'

import IndicatorContent from './IndicatorContent'

function Indicator() {
  return (
    <TripleIndicators>
      {indicatorData.map((data) => (
        <IndicatorContent
          key={uuid()}
          content={data.content}
          target={data.targetNumber}
        />
      ))}
    </TripleIndicators>
  )
}

const TripleIndicators = styled.ul`
  margin-left: 623px;
  padding-top: 150px;
  opacity: 0;
  ${ContentAnimation};
  animation-delay: 100ms;
`

export default Indicator
