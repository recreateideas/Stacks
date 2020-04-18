import styled from 'styled-components';

const Container = styled.div`
    -webkit-app-region: drag;
    cursor: default;
    display: flex;
`;

const Button = styled.div`
    /* -webkit-app-region: no-drag; */
    font-size: 9pt;
    line-height: 11px;
    margin-left: 4px;
    margin-right: 3px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    display: inline-block;
    display: flex;
    justify-content: center;
    span {
        visibility: hidden;
    }
    &.min-btn {
        background: #ffbd4c;
        border: 1px solid #e09e3e;
        span {
            font-size: 19px;
        }
    }
    &.max-btn {
        background: #00ca56;
        border: 1px solid #00ca56;
        font-size: 10px;
        span {
            font-size: 10px;
        }
    }
    &.close-btn {
        background: #ff5c5c;
        border: 1px solid #ff5c5c;
        span {
            font-size: 10px;
            top: 5px;
            position: absolute;
        }
    }
`;

const SidebarSection = styled.div`
    -webkit-app-region: drag;
    min-width: 199px;
    background-color: ${props => props.theme.palette.primary['400']};
    border-right: solid 1px ${props => props.theme.palette.neutral['200']};
`;

const PageSection = styled.div`
    width: 100%;
    -webkit-app-region: drag;
`;

const DotsButtons = styled.div`
    -webkit-app-region: drag;
    display: flex;
    padding: 5px 3px 0px 3px;
    box-sizing: border-box;
    width: fit-content;
    &:hover span {
        visibility: visible;
    }
`;

export {
    Container,
    Button,
    SidebarSection,
    PageSection,
    DotsButtons,
};
