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
    useEffect(() => {
        dispatch(getContainers());
    // eslint-disable-next-line
    }, []);
    // sort containers by name/status, start all, stop all, refresh data
    return (
        <Container>
            <Slots>
                {Object
                    .keys(containers)
                    .map(id => (
                        <DockerContainer
                            key={id}
                            data={containers[id]}
                        />
                    ))}
            </Slots>
        </Container>
    );
};


export default Containers;
