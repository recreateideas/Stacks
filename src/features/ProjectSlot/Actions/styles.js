import styled from 'styled-components';
import { styledComponents } from '../../../ui-core';

const { Action: StyledAction } = styledComponents;

const Container = styled.div`
    display: flex;
`;

const Action = styled(StyledAction)`
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
