import styled from 'styled-components';
import { styledComponents } from '../../../ui-core';

const { SlotItem } = styledComponents;

const Container = styled(SlotItem)`
    display: flex;
    flex-direction: column;
    .status  .status-indicator-inner{
        margin-right: 8px;
    }
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Cell = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.flex};
    /* border: solid 1px grey; */
    white-space: nowrap;
    padding: 8px;
`;

const Label = styled.div`
    font-weight: 600;
    color: ${props => props.theme.palette.neutral['500']};
    margin-right: 4px;
    &.id {
        line-height: 21px;
    }
`;

const Value = styled.div`
    font-weight: 400;
    &.name {
        font-weight: 800;
        font-size: 18px;
    }
    &.id {
        line-height: 21px;
    }
`;

const Table = styled.div`
    /* border: solid 1px grey; */
`;

export {
    Container,
    Row,
    Cell,
    Label,
    Value,
    Table,
};
