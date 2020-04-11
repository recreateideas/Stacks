// import constants from '../store/constants';
import initialState from '../store/initialState';

const PROJECTS = (oldState = initialState.PROJECTS, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
};

export default PROJECTS;
