import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    border: solid 1px ${props => props.theme.palette.neutral['300']};
    background-color: ${props => props.theme.palette.neutral['100']};
    margin-bottom: 8px;
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
