import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../../../redux';
import propTypes from './propTypes';
import { Container } from './styles';

const ExtendedPanel = (props) => {
    const { isExpanded, containerId, serviceName } = props;
    const dispatch = useDispatch();
    const { containers: { inspectContainer } } = actions;
    const { containers: containerSelectors } = selectors;
    const { extraData } = useSelector(containerSelectors.container(containerId));
    useEffect(() => {
        if (isExpanded) {
            const args = { serviceName, containerId };
            dispatch(inspectContainer(args));
        }
        // eslint-disable-next-line
    }, [isExpanded]);
    console.log(extraData);
    return (
        <Container className="extended-panel" isExpanded={isExpanded}>
            Extra Info
        </Container>
    );
};

ExtendedPanel.propTypes = propTypes;

export default ExtendedPanel;
