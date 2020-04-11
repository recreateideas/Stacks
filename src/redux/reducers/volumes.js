// import constants from '../store/constants';
import initialState from '../store/initialState';

const VOLUMES = (oldState = initialState.VOLUMES, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
};

export default VOLUMES;
