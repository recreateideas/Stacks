import styled from 'styled-components';

const SlotItem = styled.div`
    padding: 8px;
    border: solid 1px ${props => props.theme.palette.neutral['300']};
    background-color: ${props => props.theme.palette.neutral['100']};
    margin-bottom: 8px;
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    SlotItem,
};
