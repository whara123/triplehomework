import styled from 'styled-components'
import uuid from 'react-uuid'

import { contentAnimation } from '../utils/ContentAnimation'
import { gradesData } from '../utils/ContentData'

import GradeContent from './GradeContent'

function Grades() {
  return (
    <StoreGrades>
      {gradesData.map((data) => (
        <GradeContent
          key={uuid()}
          platform={data.platform}
          platformStore={data.platformStore}
          contents={data.contents}
        />
      ))}
    </StoreGrades>
  )
}

const StoreGrades = styled.article`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  opacity: 0;
  ${contentAnimation}
  animation-delay: 200ms;
`

export default Grades
