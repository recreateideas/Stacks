import React from 'react';
import propTypes from './propTypes';
import * as images from './images';
import { Svg } from './styles';

const HeroImage = (props) => {
    const {
        name,
        size = 64,
        rotate,
        fill = 'default',
        stroke = 'default',
        viewBox = '0 0 64 64',
        ...otherProps
    } = props;
    const Path = images[name];
    const normalizedFill = fill === 'default' ? undefined : fill;
    const normalizedStroke = stroke === 'default' ? undefined : stroke;
    return (
        <Svg
            className={`hero-image-svg ${name.toLowerCase()}`}
            width={size}
            height={size}
            rotate={rotate}
            viewBox={viewBox}
            {...otherProps}
        >
            <Path fill={normalizedFill} stroke={normalizedStroke} />
        </Svg>
    );
};

HeroImage.propTypes = propTypes;

export default HeroImage;
