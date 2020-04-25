import styled from 'styled-components';
import { styledComponents } from '../../../ui-core';

const { SlotItem } = styledComponents;

const Container = styled(SlotItem)`
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    .status  .status-indicator-inner{
        margin-right: 8px;
    }
    & .actions {
        visibility: hidden;
    }
    &:hover {
        .service-name {
            color: ${props => props.theme.palette.primary['400']};
        }
        .actions {
            visibility: visible;
            z-index: 10;
        }
    }
    .loader.boxed {
        position: absolute;
        width: calc(100% - 16px);
        height: calc(100% - 16px);
        z-index: 11; /* to be over the actions panel */
    }
`;

const MainData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Table = styled.div`
    width: 100%;
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
    letter-spacing: .5px;
    &.containerId {
        line-height: 21px;
    }
`;

const Value = styled.div`
    font-weight: 400;
    color: ${props => props.theme.palette.neutral['500']};
    &.containerId {
        line-height: 21px;
    }
`;

const Strong = styled.div`
    font-weight: 800;
    font-size: 18px;
`;

export {
    Container,
    MainData,
    Row,
    Cell,
    Label,
    Value,
    Strong,
    Table,
};
