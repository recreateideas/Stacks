import initialState from '../store/initialState';
// import { types } from '../actions/profiles';

const CONTAINERS = (oldState = initialState.CONTAINERS, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
};

export default CONTAINERS;
