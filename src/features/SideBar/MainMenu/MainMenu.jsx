import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux';
import { Container } from './styles';
import { RecursiveMenu } from '../../../components';
import { routes } from '../../../routes';

const MainMenu = () => {
    const dispatch = useDispatch();
    const { default: fourOfour, ...exactRoutes } = routes;
    const { router: { navigateTo } } = actions;
    const onSelect = (item) => {
        const { path } = item;
        dispatch(navigateTo(path));
    };
    return (
        <Container>
            <RecursiveMenu items={exactRoutes} onSelect={onSelect} />
        </Container>
    );
};

export default MainMenu;
