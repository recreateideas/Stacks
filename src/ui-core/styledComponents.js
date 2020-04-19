import styled, { css } from 'styled-components';
import hexToRgba from 'hex-rgba';

const SlotItem = styled.div`
    padding: 8px;
    border: solid 1px ${props => props.theme.palette.neutral['300']};
    background-color: ${props => props.theme.palette.neutral['100']};
    margin-bottom: 8px;
`;

const Action = styled.div`
    cursor: pointer;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 4px;
    border-radius: 20px;
    & svg, & svg * {
        color: ${props => props.theme.palette.primary['600']};
    }
    &.with-hover:hover {
        background-color: ${props => hexToRgba(props.theme.palette.neutral['400'], 20)};
    }
    &.inactive {
        &:hover {
            cursor: unset;
            background-color: unset; 
        }
        & svg, & svg * {
            color: ${props => props.theme.palette.neutral['300']};
        } 
    }
`;

export {
    SlotItem,
    Action,
};
