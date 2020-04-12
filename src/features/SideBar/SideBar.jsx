import React from 'react';
import { Container } from './styles';
import SideBarHeader from './SideBarHeader';
import MainMenu from './MainMenu';

const SideBar = () => (
    <Container
        className="main-menu"
    >
        <SideBarHeader />
        <MainMenu />
    </Container>
);

export default SideBar;
