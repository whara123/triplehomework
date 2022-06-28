import styled from 'styled-components'

import Indicator from './Indicator'
import Grades from './Grades'
import AppLogo from './AppLogo'

function SectionThrid() {
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
  min-width: 1200px;
  position: relative;
  overflow: hidden;
  background-color: #eee;
`
const ContentWrap = styled.div`
  position: relative;
  width: 1040px;
  height: auto;
  margin: 0px auto;
`

export default SectionThrid
