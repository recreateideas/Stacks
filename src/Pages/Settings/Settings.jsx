import React from 'react';
import { Container } from './styles';
import { DarkModeSwitch } from '../../features';

const Settings = () => (
    <Container className="settings-page">
        <DarkModeSwitch />
    </Container>
);

export default Settings;
