import { keyframes, css } from 'styled-components'

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

export const contentAnimation = css`
  animation: ${contentAnim} 700ms ease-in-out forwards;
`
