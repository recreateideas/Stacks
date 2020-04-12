import { push } from 'connected-react-router';

const navigateTo = location => dispatch => dispatch(push(location));

export {
    // eslint-disable-next-line import/prefer-default-export
    navigateTo,
};
