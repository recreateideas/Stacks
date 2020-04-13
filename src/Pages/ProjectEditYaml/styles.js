import styled from 'styled-components';

const Container = styled.div`
    height: 100% !important;
    .ace_editor {
        width: 100% !important;
        height: 100% !important;
        * {
            font-family: ${props => props.theme.fonts['code-negative'].fontFamily} !important;
            font-size: unset;
        }
        .ace_gutter {
            background-color: ${props => props.theme.palette.neutral[props.theme.fixedToLight('600')]} !important;
        }
        .ace_gutter-active-line {
            background-color: ${props => props.theme.palette.neutral[props.theme.fixedToLight('700')]} !important;
        }
        .ace_scroller {
            background-color: ${props => props.theme.palette.neutral[props.theme.fixedToLight('700')]} !important;
        }
        .ace_print-margin {
            left: 100% !important;
            visibility: hidden !important;
        }
    }
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Container,
};
