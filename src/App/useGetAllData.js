import { useDispatch } from 'react-redux';
import { actions } from '../redux';

const useGetAllData = () => {
    const dispatch = useDispatch();
    const {
        containers: { getContainers },
        projects: { getProjects },
        images: { getImages },
        volumes: { getVolumes },
        networks: { getNetworks },
    } = actions;
    dispatch(getContainers());
    dispatch(getProjects());
    dispatch(getImages());
    dispatch(getVolumes());
    dispatch(getNetworks());
};

export default useGetAllData;
