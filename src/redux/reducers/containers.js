// eslint-disable-next-line import/no-cycle
import { types } from '../actions/containers';
import initialState from '../store/initialState';

const CONTAINERS = (oldState = initialState.CONTAINERS, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type, data } = action;
    switch (type) {
        case types.SET_CONTAINERS:
            return data;
        case types.SET_CONTAINER_EXTRA_DATA:
            return {
                ...state,
                [data.containerId]: {
                    ...state[data.containerId],
                    extraData: data.extradata,
                },
            };
        case types.SET_CONTAINER_INFO:
            return {
                ...state,
                [data.containerId]: {
                    ...state[data.containerId],
                    ...data.info,
                },
            };
        default:
            return state;
    }
};

export default CONTAINERS;
