import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';
import { Container } from './styles';

const Networks = () => {
    const dispatch = useDispatch();
    const { networks: { getNetworks } } = actions;
    const { networks: networkSelectors } = selectors;
    const networks = useSelector(networkSelectors.networks);
    useEffect(() => {
        dispatch(getNetworks());
    // eslint-disable-next-line
    }, []);
    return (
        <Container> Networks {JSON.stringify(networks, null, 4)}</Container>
    );
};


export default Networks;
