// eslint-disable-next-line import/no-cycle
import { types } from '../actions/volumes';
import initialState from '../store/initialState';

const VOLUMES = (oldState = initialState.VOLUMES, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type, data } = action;
    switch (type) {
        case types.SET_VOLUMES:
            return data;
        default:
            return state;
    }
};

export default VOLUMES;
