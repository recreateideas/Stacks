import React from 'react';
import propTypes from './propTypes';
import { Container } from './styles';

const StatusIndicator = (props) => {
    const { isActive, size = 9 } = props;
    return (
        <Container
            className="status-indicator-inner"
            isActive={isActive}
            size={size}
        />
    );
};

StatusIndicator.propTypes = propTypes;

export default StatusIndicator;
