import styled from 'styled-components'

import { ContentAnimation } from '../utils/ContentAnimation'
import { ImageStroage } from '../utils/ImageStorage'

function Grades() {
  return (
    <StoreGrades>
      <StoreGrade name="google">
        2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
      </StoreGrade>
      <StoreGrade name="apple">
        2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
      </StoreGrade>
    </StoreGrades>
  )
}

const StoreGrades = styled.article`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  opacity: 0;
  ${ContentAnimation}
  animation-delay: 200ms;
`

const StoreGrade = styled.p`
  display: inline-block;
  height: 54px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  background-image: ${(props) =>
    props.name === 'google'
      ? `url(${ImageStroage.playStore})`
      : `url(${ImageStroage.appleBadge})`};
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
`

export default Grades
