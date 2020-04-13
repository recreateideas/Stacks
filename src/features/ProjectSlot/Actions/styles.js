import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Action = styled.div`
    cursor: pointer;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 4px;
    &.yaml svg {
        transform: rotate(45deg);
    }
    &.expand {
        margin-left: 16px;
    }
`;

export {
    Action,
    Container,
};
