import styled from 'styled-components'

import Indicator from './Indeicators/Indicator'
import Grades from './Awards/Grades'
import AppLogo from './ContentLogo/AppLogo'

function StatisticSection() {
  return (
    <SectionBody>
      <ContentWrap>
        <AppLogo />
        <Indicator />
        <Grades />
      </ContentWrap>
    </SectionBody>
  )
}

const SectionBody = styled.section`
  position: relative;

  min-width: 1200px;

  overflow: hidden;
`
const ContentWrap = styled.div`
  position: relative;

  width: 1040px;
  height: auto;

  margin: 0px auto;
`

export default StatisticSection
