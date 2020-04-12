// eslint-disable-next-line import/no-cycle
import { types } from '../actions/networks';
import initialState from '../store/initialState';

const NETWORKS = (oldState = initialState.NETWORKS, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type, data } = action;
    switch (type) {
        case types.SET_NETWORKS:
            return data;
        default:
            return state;
    }
};

export default NETWORKS;
