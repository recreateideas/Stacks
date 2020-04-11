import types from './types';

const actions = {
    setProject: project => ({
        type: types.SET_PROJECT,
        data: project,
    }),
};

export default actions;
