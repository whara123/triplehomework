import styled from 'styled-components'

import { contentAnimation } from '../utils/ContentAnimation'
import { ImageStroage } from '../utils/ImageStorage'

function AppLogo() {
  return <AppOfTheYear>2021년 12월 기준</AppOfTheYear>
}

const AppOfTheYear = styled.article`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  box-sizing: border-box;
  background-image: url(${ImageStroage.tripleLogo});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  text-align: center;
  ${contentAnimation};
  color: rgba(58, 58, 58, 0.7);
`

export default AppLogo
