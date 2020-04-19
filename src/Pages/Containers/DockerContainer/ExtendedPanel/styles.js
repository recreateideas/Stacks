import styled from 'styled-components';

const Container = styled.div`
    height: auto;
    max-height: ${props => (props.isExpanded ? '300px' : '0px')};
    transition: max-height .2s;
    overflow-y: ${props => (props.isExpanded ? 'auto' : 'hidden')};
    word-break: break-word;
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Container,
};
