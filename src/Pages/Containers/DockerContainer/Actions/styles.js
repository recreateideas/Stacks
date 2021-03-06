import styled from 'styled-components';
import { styledComponents } from '../../../../ui-core';

const { Action: StyledAction } = styledComponents;

const Container = styled.div`
    position: absolute;
    right: 8px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px;
    background-color: ${props => props.theme.palette.primary['100']};
`;

const Action = styled(StyledAction)`
    &:not(:last-of-type) {
        margin-bottom: 4px;
    }
    &.exec svg {
        font-size: 19px;
        margin-left: 1px;
    }
`;

export {
    Container,
    Action,
};
