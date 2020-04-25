// eslint-disable-next-line import/no-cycle
import { types } from '../actions/projects';
import initialState from '../store/initialState';

const PROJECTS = (oldState = initialState.PROJECTS, action) => {
    const state = JSON.parse(JSON.stringify(oldState));
    const { type, data } = action;
    switch (type) {
        case types.SET_PROJECTS:
            return { ...state, ...data };
        case types.SET_YAML_CONTENT:
            state.yamls[data.path] = data.content;
            return state;
        case types.SET_YAMLS_CONTENTS:
            return {
                ...state,
                ...data.files,
            };
        case types.SET_PROJECTS_LOAD_PENDING:
            return {
                ...state,
                loading: true,
            };
        case types.SET_PROJECTS_LOAD_COMPLETE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default PROJECTS;
