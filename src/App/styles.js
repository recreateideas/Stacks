import styled from 'styled-components';

const Application = styled.div`
    display: flex;
    height: calc(100% - 18px); /* 21px header height */
`;

const PageContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
`;

const PageContent = styled.div`
    padding: 16px 16px 16px 16px;
    /* box-sizing: border-box; */
    white-space: pre-wrap;
    overflow-y: auto;
    max-height: calc(100% - 58px); /* 56px header height + 2px buffer*/
    min-height: calc(100% - 58px);
    background-color: ${props => props.theme.palette.neutral['200']}
`;

export {
    Application,
    PageContainer,
    PageContent,
};
