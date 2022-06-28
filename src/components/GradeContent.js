import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ImageStroage } from '../utils/ImageStorage'

function GradeContent({ platform, platformStore, contents }) {
  GradeContent.propTypes = {
    platform: PropTypes.string.isRequired,
    platformStore: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
  }
  return (
    <StoreGrade name={platform}>
      {platformStore}
      <br />
      {contents}
    </StoreGrade>
  )
}

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

export default GradeContent
