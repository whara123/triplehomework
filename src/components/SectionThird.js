import styled, { keyframes } from 'styled-components'

import tripleLogo from '../image/triple2x.png'
import playStore from '../image/play-store2x.png'
import appleBadge from '../image/badge-apple4x.png'

function SectionThrid() {
  return (
    <SectionBody>
      <ContentWrap>
        <AppOfTheYear>2021년 12월 기준</AppOfTheYear>
        <TripleIndicators>
          <p>
            <strong>
              <span>0</span>만 명
            </strong>
            의 여행자
          </p>
          <p>
            <strong>
              <span>0</span>만 개
            </strong>
            의 여행 리뷰
          </p>
          <p>
            <strong>
              <span>0</span>만 개
            </strong>
            의 여행 일정
          </p>
        </TripleIndicators>
        <StoreGrades>
          <PlayStoreGrade>
            2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
          </PlayStoreGrade>
          <AppleStoreGrade>
            2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
          </AppleStoreGrade>
        </StoreGrades>
      </ContentWrap>
    </SectionBody>
  )
}

const contentAnim = keyframes`
0%{
  transform: translateY(10px);
  opacity: 0;
}
100%{
  transform: translateY(0);
  opacity: 1;
  }
`

const SectionBody = styled.section`
  min-width: 1200px;
  position: relative;
  overflow: hidden;
  background-image: inherit;
  background-repeat: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  background-size: cover;
  background-position: center center;
  font-family: sans-serif;
  background-color: #eee;
`
const ContentWrap = styled.div`
  position: relative;
  width: 1040px;
  height: auto;
  margin: 0px auto;
`

const AppOfTheYear = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  box-sizing: border-box;
  background-image: url(${tripleLogo});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  text-align: center;
  animation: ${contentAnim} 700ms ease-in-out forwards;
  color: rgba(58, 58, 58, 0.7);
`

const TripleIndicators = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  opacity: 0;
  animation: ${contentAnim} 700ms ease-in-out 100ms forwards;
  p {
    font-size: 36px;
    line-height: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }
`

const StoreGrades = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  opacity: 0;
  animation: ${contentAnim} 700ms ease-in-out 200ms forwards;
`

const PlayStoreGrade = styled.p`
  display: inline-block;
  height: 54px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  background-image: url(${playStore});
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
`

const AppleStoreGrade = styled.p`
  display: inline-block;
  height: 54px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  background-image: url(${appleBadge});
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
`

export default SectionThrid
