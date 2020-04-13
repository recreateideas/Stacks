import styled from 'styled-components';

const Container = styled.div`
    .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
        background-color: ${props => props.theme.palette.primary['400']};
        opacity: 1;
    }
    .MuiSwitch-track {
        background-color: ${props => props.theme.palette.neutral['400']};
        opacity: 1;
    }
    .MuiSwitch-colorSecondary.Mui-checked {
        color: ${props => props.theme.palette.primary['400']};
    }
    .MuiSwitch-colorSecondary:hover {
        background-color: unset !important;
    }
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Container,
};
