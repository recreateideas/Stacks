import styled from 'styled-components';

const Container = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${(props) => {
        const { isActive, theme: { palette: { accents: { green, yellow } } } } = props;
        return isActive ? green['400'] : yellow['400'];
    }};
    border-radius: 20px;
    margin-top: auto;
    margin-bottom: auto;
    border: solid 1px ${props => props.theme.palette.neutral['400']};
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Container,
};
