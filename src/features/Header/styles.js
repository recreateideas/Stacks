import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: solid 1px ${props => props.theme.palette.neutral['300']};
`;

const Title = styled.div`
    font-weight: 400;
    font-size: 20px;
    padding: 0px 16px 16px 16px;
    color: ${props => props.theme.palette.neutral['600']};
`;

export {
    Title,
    Container,
};
