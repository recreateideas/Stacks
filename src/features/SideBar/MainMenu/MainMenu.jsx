import React from 'react';
import { Container } from './styles';
import { RecursiveMenu } from '../../../components';
import { routes } from '../../../routes';

const MainMenu = () => {
    const { default: fourOfour, ...exactRoutes } = routes;
    return (
        <Container>
            <RecursiveMenu items={exactRoutes} />
        </Container>
    );
};

export default MainMenu;
