import types from './types';

const actions = {
    setUser: user => ({
        type: types.SET_USER,
        data: user,
    }),
};

export default actions;
