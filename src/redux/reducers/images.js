import initialState from '../store/initialState';

const IMAGES = (oldState = initialState.IMAGES, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
};

export default IMAGES;
