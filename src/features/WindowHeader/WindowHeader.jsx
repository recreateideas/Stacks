import React from 'react';
import propTypes from './propTypes';
import {
    Container, Button, SidebarSection, PageSection, DotsButtons,
} from './styles';

const { BrowserWindow } = window.require('electron').remote;

const WindowHeader = (props) => {
    const {
        title = '',
    } = props;
    const minimize = () => {
        const window = BrowserWindow.getFocusedWindow();
        window.minimize();
    };
    const maximize = () => {
        const window = BrowserWindow.getFocusedWindow();
        window.maximize();
    };
    const close = () => {
        const window = BrowserWindow.getFocusedWindow();
        window.close();
    };
    return (
        <Container className="window-header">
            <SidebarSection>
                <DotsButtons className="title-bar-btns">
                    <Button className="close-btn" onClick={close}><span>x</span></Button>
                    <Button className="min-btn" onClick={minimize}><span>-</span></Button>
                    <Button className="max-btn" onClick={maximize}><span>+</span></Button>
                </DotsButtons>
            </SidebarSection>
            <PageSection>
                <div className="title">{title}</div>
            </PageSection>
        </Container>
    );
};

WindowHeader.propTypes = propTypes;

export default WindowHeader;
