import initialState from '../store/initialState';
import { types } from '../actions/containers';

const CONTAINERS = (oldState = initialState.CONTAINERS, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type, data } = action;
    switch (type) {
        case types.SET_CONTAINERS:
            return data;
        default:
            return state;
    }
};

export default CONTAINERS;
