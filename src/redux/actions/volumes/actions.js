import types from './types';

const actions = {
    setVolume: volume => ({
        type: types.SET_VOLUME,
        data: volume,
    }),
};

export default actions;
