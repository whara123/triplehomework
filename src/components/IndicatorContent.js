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

      if (currentIncrease < 0) {
        clearInterval(delayCounter)
      }

      const next = currentIncrease / 10
      currentIncrease -= next
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
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

export default IndicatorContent
