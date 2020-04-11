import React from 'react';
import { Container } from './styles';
import MenuHeader from './MenuHeader';

const MainMenu = () => (
    <Container
        className="main-menu"
    >
        <MenuHeader />
        <span>MainMenu</span>
    </Container>
);

export default MainMenu;
