import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';
import { Container, Slots } from './styles';
import DockerContainer from './DockerContainer';

const Containers = () => {
    const dispatch = useDispatch();
    const { containers: { getContainers } } = actions;
    const { containers: containerSelectors } = selectors;
    const containers = useSelector(containerSelectors.containers);
    const showLogs = (args) => {
        const { serviceName } = args;
        console.log(serviceName);
    };
    useEffect(() => {
        dispatch(getContainers());
    // eslint-disable-next-line
    }, []);
    // sort containers by name/status, start all, stop all, refresh data
    // env variables
    return (
        <Container>
            <Slots>
                {Object
                    .keys(containers)
                    .map(containerId => (
                        <DockerContainer
                            key={containerId}
                            containerId={containerId}
                            onShowLogs={showLogs}
                        />
                    ))}
            </Slots>
        </Container>
    );
};


export default Containers;
