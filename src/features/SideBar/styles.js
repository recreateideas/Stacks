import styled from 'styled-components';

const Container = styled.div`
    padding: 24px 0px 24px 0px;
    height: 100%;
    width: 25%;
    min-width: 200px;
    box-sizing: border-box; 
    border-right: solid 1px ${props => props.theme.palette.neutral['200']};
    background-color: ${props => props.theme.palette.primary['400']};
`;

const Menu = styled.div`
    height: 100%;
`;

export {
    Container,
    Menu,
};
