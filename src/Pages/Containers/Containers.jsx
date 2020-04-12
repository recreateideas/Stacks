import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';

const Containers = () => {
    const dispatch = useDispatch();
    const { containers: { getContainers } } = actions;
    const { containers: containersSelectors } = selectors;
    const containers = useSelector(containersSelectors.containers);
    useEffect(() => {
        dispatch(getContainers());
    // eslint-disable-next-line
    }, []);
    return (
        <div> Containers {JSON.stringify(containers, null, 4)}</div>
    );
};


export default Containers;
