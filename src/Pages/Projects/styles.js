import styled from 'styled-components';

const Container = styled.div`
 
`;

const Slots = styled.div`
    margin: 10% 15% 0 15%;
`;

const AddProject = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin-top: 16px;
    & svg, & svg * {
        color: ${props => props.theme.palette.primary['500']};
        font-size: 25px;
    }
`;

export {
    Container,
    Slots,
    AddProject,
};
