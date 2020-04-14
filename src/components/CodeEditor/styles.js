import styled from 'styled-components';

const Container = styled.div`
    height: 100% !important;
    .ace_editor {
        width: 100% !important;
        height: 100% !important;
        background-color: ${props => props.theme.palette.neutral[props.theme.fixedToLight('600')]} !important;
        color: unset !important;
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
        .ace_gutter-cell.ace_gutter-active-line {
            background-color: ${props => props.theme.palette.neutral[props.theme.fixedToLight('500')]} !important;
        }
        .ace_scroller {
            background-color: ${props => props.theme.palette.neutral[props.theme.fixedToLight('700')]} !important;
        }
        .ace_print-margin {
            left: 100% !important;
            visibility: hidden !important;
        }
        .ace_line {
            color: ${props => props.theme.palette.neutral[props.theme.fixedToLight('300')]} !important;
        }
        .ace_variable {
            color: ${props => props.theme.palette.primary[props.theme.fixedToLight('300')]} !important;
        }
        .ace_string {
            color: ${props => props.theme.palette.accents.highlight['400']} !important;
        }
        .ace_numeric {
            color: ${props => props.theme.palette.accents.yellow[props.theme.fixedToLight('400')]} !important;
        }
        .ace_cursor, .ace_string.ace_regexp {
            color: ${props => props.theme.palette.primary[props.theme.fixedToLight('200')]} !important;
        }
    }
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Container,
};
