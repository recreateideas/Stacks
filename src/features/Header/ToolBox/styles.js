import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 16px;
    .MuiSvgIcon-root {
        font-size: 30px;
        cursor: pointer;
        path {
            color: ${props => props.theme.palette.neutral['500']};
        }
    }
`;

const Title = styled.div`
    font-weight: 400;
    font-size: 20px;
    padding: 16px;
    color: ${props => props.theme.palette.neutral['600']};
`;

export {
    Title,
    Container,
};
