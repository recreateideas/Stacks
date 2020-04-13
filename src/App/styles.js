import styled from 'styled-components';

const Application = styled.div`
    display: flex;
    height: 100%;
`;

const PageContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
`;

const PageContent = styled.div`
    padding: 16px 16px 16px 16px;
    box-sizing: border-box;
    white-space: pre-wrap;
    overflow-y: auto;
    max-height: calc(100% - 56px); /* 56px = header height */
    min-height: calc(100% - 56px); 
`;

export {
    Application,
    PageContainer,
    PageContent,
};
