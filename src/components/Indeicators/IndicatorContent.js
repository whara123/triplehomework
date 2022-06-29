import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function IndicatorContent({ target, content }) {
  IndicatorContent.propTypes = {
    target: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }

  const [targetNumber, setTargetNumber] = useState(0)

  const counter = (setNumber, targetNumber) => {
    let currentIncrease = targetNumber

    const delayCounter = setInterval(() => {
      setNumber(Math.ceil(targetNumber - currentIncrease))

      if (Math.floor(currentIncrease) === 0) {
        clearInterval(delayCounter)
      }

      currentIncrease -= currentIncrease / 10
    }, 40)
  }

  useEffect(() => {
    setTimeout(() => counter(setTargetNumber, target))
  }, [target])

  return (
    <IndicatorList>
      <strong>
        {targetNumber}만 {content === '여행자' ? '명' : '개'}
      </strong>
      의 {content}
    </IndicatorList>
  )
}

const IndicatorList = styled.li`
  margin-bottom: 20px;

  font-size: 36px;
  line-height: 36px;
  letter-spacing: -1px;
`

export default IndicatorContent
