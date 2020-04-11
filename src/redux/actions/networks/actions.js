import types from './types';

const actions = {
    setNetwork: network => ({
        type: types.SET_NETWORK,
        data: network,
    }),
};

export default actions;
