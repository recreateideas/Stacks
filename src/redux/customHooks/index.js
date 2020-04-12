import { useSelector as reduxUseSelector } from 'react-redux';
import isEqual from 'lodash.isequal';

const useSelector = (func, rerenderOnChange = true) => {
    const equalityFn = rerenderOnChange ? isEqual : () => true;
    return reduxUseSelector(func, equalityFn);
};

export {
    // eslint-disable-next-line import/prefer-default-export
    useSelector,
};
