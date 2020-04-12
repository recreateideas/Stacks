import initialState from '../store/initialState';
import { types } from '../actions/user';

const USER = (oldState = initialState.USER, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type, data } = action;
    switch (type) {
        case types.SET_THEME_MODE:
            return { ...state, isDarkMode: data };
        default:
            return state;
    }
};

export default USER;
