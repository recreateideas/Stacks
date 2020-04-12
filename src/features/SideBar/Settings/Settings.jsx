import React from 'react';
import { Settings as SettingsIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux';
import { Container } from './styles';
import { routes } from '../../../routes';

const Settings = () => {
    const dispatch = useDispatch();
    const { router: { navigateTo } } = actions;
    const { settings: { path: settingsPath } } = routes;
    const onClick = () => dispatch(navigateTo(settingsPath));
    return (
        <Container onClick={onClick}>
            <SettingsIcon />
        </Container>
    );
};

export default Settings;
