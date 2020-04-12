import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';

const Volumes = () => {
    const dispatch = useDispatch();
    const { volumes: { getVolumes } } = actions;
    const { volumes: volumeSelectors } = selectors;
    const volumes = useSelector(volumeSelectors.volumes);
    useEffect(() => {
        dispatch(getVolumes());
    // eslint-disable-next-line
    }, []);
    return (
        <div> Volumes {JSON.stringify(volumes, null, 4)}</div>
    );
};


export default Volumes;
