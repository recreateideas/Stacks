import styled, { css } from 'styled-components';
import hexToRgba from 'hex-rgba';

const Container = styled.div`
    display: flex;
`;

const Action = styled.div`
    cursor: pointer;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 4px;
    border-radius: 20px;
    &.yaml svg {
        transform: rotate(45deg);
    }
    &.expand {
        margin-left: 16px;
    }
    & svg, & svg * {
        color: ${props => props.theme.palette.primary['600']};
    }
    &.with-hover:hover {
        background-color: ${props => hexToRgba(props.theme.palette.neutral['400'], 20)};
    }
    &.start {
        ${props => props.statusActive && css`
            &:hover {
                cursor: unset;
                background-color: unset; 
            }
            & svg, & svg * {
                color: ${props.theme.palette.neutral['300']};
            }  
        `}
    }
    &.stop {
        ${props => !props.statusActive && css`
            &:hover {
                cursor: unset;
                background-color: unset; 
            }
            & svg, & svg * {
                color: ${props.theme.palette.neutral['300']};
            }  
        `}
    }
`;

export {
    Action,
    Container,
};
