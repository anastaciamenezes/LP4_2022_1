import { createGlobalStyle } from 'styled-components'

import BoldFont from './RobotoSerif-Bold.ttf'
import RegularFont from './RobotoSerif-Regular.ttf'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'bold' ;
    src: url(${BoldFont});
  }

@font-face {
  font-family: 'regular' ;
  src: url(${RegularFont});
}
`
export default FontStyles