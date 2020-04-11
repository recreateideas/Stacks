import styled from 'styled-components';
const ErrorContainer = styled.div`
   position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center; 
`;

const ErrorText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.isDark
        ? props.theme.palette.lightText
        : props.theme.palette.indegoDye}
`;

export {
    ErrorContainer,
    ErrorText,
};