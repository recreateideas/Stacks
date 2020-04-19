import styled from 'styled-components';

const Container = styled.div`
    height: auto;
    max-height: ${props => (props.isExpanded ? '100px' : '0px')};
    transition: max-height .2s;
    overflow: hidden;
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Container,
};
