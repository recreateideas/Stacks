import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
    padding-bottom: 8px;
`;

const Title = styled.div`
    ${props => ({ ...props.theme.fonts.h1 })}
`;

export {
    Title,
    Container,
};
