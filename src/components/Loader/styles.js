import styled from 'styled-components';
import hexToRgba from 'hex-rgba';

const Container = styled.div`
    cursor: default;
    &.full-screen {
        height: calc(100% - 59px);
        width: calc(100% - 200px);
        position: fixed;
        top: 59px;
        left: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${props => hexToRgba(props.theme.palette.neutral['100'], 70)};
    }
    &.boxed {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${props => hexToRgba(props.theme.palette.neutral['100'], 70)};
    }
`;

const Align = styled.div`
    display: flex;
    justify-content: center;
`;

export {
    Container,
    Align,
};
