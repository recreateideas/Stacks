import initialState from '../store/initialState';
// import { types } from '../actions/user';

const USER = (oldState = initialState.USER, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
};

export default USER;
