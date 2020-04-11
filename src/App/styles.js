import styled from 'styled-components';

const Application = styled.div`
    display: flex;
    height: 100%;
    * {
        font-family: Roboto;
        font-weight: normal;
        font-size: 1em;
        color: ${props => props.theme.palette.neutral['700']};
    }
    .page-content {
        width: 100%;
    }
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Application,
};
