// eslint-disable-next-line import/no-cycle
import { types } from '../actions/images';
import initialState from '../store/initialState';

const IMAGES = (oldState = initialState.IMAGES, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type, data } = action;
    switch (type) {
        case types.SET_IMAGES:
            return data;
        default:
            return state;
    }
};

export default IMAGES;
