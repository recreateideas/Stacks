import { createGlobalStyle } from 'styled-components';
import hexToRgba from 'hex-rgba';

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
        letter-spacing: .3px;
    }
    ::-webkit-scrollbar {
            width: 7px;
            height: 7px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 10px;
            background: ${props => hexToRgba(props.theme.palette.neutral['700'], 10)};
        }

             /* Handle */
             ::-webkit-scrollbar-thumb {
             box-shadow: inset 0 0 0 1px ${props => hexToRgba(props.theme.palette.primary['400'], 50)}, inset 0 0 0 5px ${props => hexToRgba(props.theme.palette.primary['400'], 50)} !important;
            border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            box-shadow: inset 0 0 0 1px ${props => hexToRgba(props.theme.palette.primary['400'], 100)}, inset 0 0 0 5px ${props => hexToRgba(props.theme.palette.primary['400'], 100)} !important;
            background: #555;
        }

        *::-webkit-scrollbar-corner {
            background-color: rgba(0, 0, 0, 0);
        }
`;

export default GlobalStyle;
