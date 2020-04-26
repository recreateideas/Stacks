import styled from 'styled-components';

const Container = styled.div`
`;

const Label = styled.div``;

const Input = styled.input`
    border: 0px;
    &:focus {
        outline:0;
    }
    width: ${props => props.width}px;
`;

export {
    Container,
    Label,
    Input,
};
