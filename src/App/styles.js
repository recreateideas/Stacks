import styled from 'styled-components';

const Application = styled.div`
    display: flex;
    height: 100%;
`;

const PageContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
`;

const Page = styled.div`
    width: fit-content;
    padding: 16px 16px 16px 16px;
    box-sizing: border-box;
    white-space: pre-wrap;
`;

export {
    Application,
    PageContainer,
    Page,
};
