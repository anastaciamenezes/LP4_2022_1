import { createGlobalStyle } from "styled-components"

import BoldFont from "./SourceSansPro-Bold.ttf"
import RegularFont from "./SourceSansPro-Regular.ttf"

// Estilização global
const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'bold';
    src: url(${BoldFont});
  }

  @font-face {
    font-family: 'regular' ;
    src: url(${RegularFont});
  }
`

export default FontStyles