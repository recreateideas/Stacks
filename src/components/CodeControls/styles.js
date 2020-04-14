import styled from 'styled-components';
import hexToRgba from 'hex-rgba';

const Container = styled.div`
    padding: 8px;
    display: flex;
    background-color: ${props => hexToRgba(props.theme.palette.primary['400'], 30)};
    &:hover {
        background-color: ${props => props.theme.palette.primary['400']};
        .action-button svg, .action-button svg * {
            color: ${props => props.theme.palette.neutral[props.theme.fixedToLight('100')]};
        }
    }
`;

const Action = styled.div`
    cursor: pointer;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 4px;
    border-radius: 20px;
    margin: 0 4px;
    svg, svg * {
        color: ${props => hexToRgba(props.theme.palette.neutral[props.theme.fixedToLight('100')], 50)};
    }
`;

export {
    Container,
    Action,
};
