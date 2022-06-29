# triple-homework

## 프로젝트 실행 방법

```
npm install
npm start
```

<br />

## 사용한 기술과 선택한 이유

### **styled-components**

- props 값에 따른 스타일 적용을 위해 사용

```js
  background-image: ${(props) =>
    props.name === 'google'
      ? `url(${ImageStroage.playStore})`
      : `url(${ImageStroage.appleBadge})`};
```

### **styled-components 1. GlobalStyle**

- createGlobalStyle으로 GlobalStyle을 생성하여 최상위 컴포넌트에 사용
- 하위 컴포넌트 스타일이 동일한 내용들을 적용

```js
function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}
```

### **styled-components 2. Animation**

- 컴포넌트 별로 동일한 애니메이션(위로 위치 변경, 페이드인/아웃 애니메이션) 적용을 위해 utils폴더에 애니메이션 js 파일 생성

```js
import { keyframes, css } from 'styled-components'
.
.
.
export const contentAnimation = css`
animation: ${contentAnim} 700ms ease-in-out forwards;
```

<br />

### **props-type**

- 부모로부터 전달받은 prop의 데이터 type을 검사
- 예상치 못한 오류 방지

```js
function GradeContent({ platform, platformStore, contents }) {
  GradeContent.propTypes = {
    platform: PropTypes.string.isRequired,
    platformStore: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
  }
}
```

<br/>

### **컴포넌트**

섹션의 컨텐츠를 세가지 컴포넌트로 분리

```js
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
```

<br />

### **Data 분리**

- ImageStroage

이미지를 한 곳에서 관리하도록 파일 분리

```js
import playStore from '../image/play-store2x.png'
import appleBadge from '../image/badge-apple4x.png'
import tripleLogo from '../image/triple2x.png'

export const ImageStroage = {
  tripleLogo,
  appleBadge,
  playStore,
}
```

필요한 컴포넌트에서 import 후 사용

```js
import { ImageStroage } from '../../utils/ImageStorage'
 .
 .
 .
background-image: url(${ImageStroage.tripleLogo});
 .
 .
```

- ContentData

지표, 수상 내역은 컨텐츠의 컴포넌트 분리를 위해 데이터를 생성

```js
export const indicatorData = [
  {
    content: '여행자',
    targetNumber: 700,
  },
  {
    content: '여행 리뷰',
    targetNumber: 100,
  },
  {
    content: '여행 일정',
    targetNumber: 470,
  },
]

export const gradesData = [
  {
    platform: 'google',
    platformStore: '2018 구글 플레이스토어',
    contents: '올해의 앱 최우수상 수상',
  },
  {
    platform: 'apple',
    platformStore: '2018 애플 앱스토어',
    contents: '오늘의 여행앱 선정',
  },
]
```

```js
import { indicatorData } from '../../utils/ContentData'
.
.
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
UUID는 키 값을 위해 사용
```

<br/>

### **숫자 상승 애니메이션**

useState로 목표 숫자를 0으로 초기화, `counter` 함수에서 setTargetNumber으로 목표 숫자까지 값 변경

- `currentIncrease`변수를 생성해서 목표 숫자에서 변수를 뺀 값을 `setTargetNumber`로 숫자를 변경
- `currentIncrease`변수 증가값을 점차 줄이면서 시간차가 생기도록 구현
- `currentIncrease`의 정수 값이 0이 되면 clearInterval로 정지

```js
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
  counter(setTargetNumber, target)
}, [target])
```
![과제](https://user-images.githubusercontent.com/64121533/176393202-23d70db3-0202-467b-86e9-7f6a0b1d1d43.gif)
