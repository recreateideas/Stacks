import React from 'react';
import { Align, Title, Container } from './styles';

// eslint-disable-next-line arrow-body-style
const MenuHeader = () => {
    return (
        <Container className="menu-header">
            <Align>
                <Title>Moby</Title>
            </Align>
        </Container>
    );
};

export default MenuHeader;
