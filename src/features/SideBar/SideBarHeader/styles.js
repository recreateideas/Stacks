import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const Title = styled.div`
    ${props => ({ ...props.theme.fonts['h1-negative'] })}
`;

const Align = styled.div`

`;

export {
    Title,
    Container,
    Align,
};
