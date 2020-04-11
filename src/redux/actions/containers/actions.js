import types from './types';

const actions = {
    setContainer: container => ({
        type: types.SET_CONTAINER,
        data: container,
    }),
};

export default actions;
