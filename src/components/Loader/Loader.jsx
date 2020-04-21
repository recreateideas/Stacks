import React from 'react';
import propTypes from './propTypes';
import { Container, Align } from './styles';
import { Dots } from './loaders';

const Loader = (props) => {
    const { type = 'dots', mode = 'full-screen' } = props;
    const loaderMap = {
        dots: Dots,
    };
    const LoaderComponent = loaderMap[type];
    return (
        <Container className={`loader ${mode}`}>
            <Align className="align">
                <LoaderComponent />
            </Align>
        </Container>
    );
};

Loader.propTypes = propTypes;

export default Loader;
