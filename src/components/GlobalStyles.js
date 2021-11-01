// vamos adefinir las propiedades de estilos de  mas alto nivel que heredaran todos los Elementos del Dom
import {normalize} from 'polished';
import {createGlobalStyle} from 'styled-components';
import {fontFamily, fontWeight, neutral} from "../variables";

export const GlobalStyles = createGlobalStyle`
    ${normalize()}
    html {
      font-size: 16px;
      box-sizing: border-box;
    }
    
    body {
      font-family: ${fontFamily.primary};
      font-weight: ${fontWeight.normal};
      color: ${neutral["600"]};
    }
    
    .main {
      margin: 20px auto;
      width: 90%;
    }
`;
