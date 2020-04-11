import types from './types';

const actions = {
    setImage: image => ({
        type: types.SET_IMAGE,
        data: image,
    }),
};

export default actions;
