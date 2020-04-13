import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';
import { Container } from './styles';

const Containers = () => {
    const dispatch = useDispatch();
    const { containers: { getContainers } } = actions;
    const { containers: containerSelectors } = selectors;
    const containers = useSelector(containerSelectors.containers);
    useEffect(() => {
        dispatch(getContainers());
    // eslint-disable-next-line
    }, []);
    return (
        <Container> Containers {JSON.stringify(containers, null, 4)}</Container>
    );
};


export default Containers;
