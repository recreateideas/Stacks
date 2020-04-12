import React from 'react';
import propTypes from './propTypes';
import { Container, Title } from './styles';
import ToolBox from './ToolBox';

const Header = (props) => {
    const { title } = props;
    return (
        <Container className="page-header">
            <Title>
                {title}
            </Title>
            <ToolBox />
        </Container>
    );
};

Header.propTypes = propTypes;

export default Header;
