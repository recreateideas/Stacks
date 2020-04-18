import styled from 'styled-components';
import { styledComponents } from '../../ui-core';

const { SlotItem } = styledComponents;

const Container = styled(SlotItem)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Path = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    text-overflow: ellipsis;
    direction: rtl;
    overflow-x: hidden;
    white-space: nowrap;
`;

const Div = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    &.status {
        margin-right: 16px;
    }
`;

const Group = styled.div`
    display: flex;
    max-width: 50%;
`;

export {
    Path,
    Div,
    Container,
    Group,
};
