import React from 'react';
import propTypes from './propTypes';
import { Container } from './styles';

const CodeControls = (props) => {
    console.log(props);
    return (
        <Container>
            Controls
        </Container>
    );
};

CodeControls.propTypes = propTypes;

export default CodeControls;
