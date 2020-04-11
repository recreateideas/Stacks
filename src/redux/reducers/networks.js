// import constants from '../store/constants';
import initialState from '../store/initialState';

const NETWORKS = (oldState = initialState.NETWORKS, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
};

export default NETWORKS;
