import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    mode: PropTypes.string,
    getTheme: PropTypes.func,
};

export default propTypes;
