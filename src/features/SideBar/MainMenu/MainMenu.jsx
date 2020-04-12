import React from 'react';
import { Container } from './styles';
import { RecursiveMenu } from '../../../components';
import { routes } from '../../../routes';

const MainMenu = () => (
    <Container>
        <RecursiveMenu items={routes} />
    </Container>
);

export default MainMenu;
