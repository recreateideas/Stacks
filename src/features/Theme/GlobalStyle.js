import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, #moby-app {
      height: 100%;
      margin: 0px;
    }
    * {
        font-family: Roboto;
        font-weight: normal;
        font-size: 14px;
        color: ${props => props.theme.palette.neutral['700']};
    }
`;

export default GlobalStyle;
