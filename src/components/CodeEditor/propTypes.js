import PropTypes from 'prop-types';

const propTypes = {
    mode: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array,
    ]),
    wrapEnabled: PropTypes.bool,
};

export default propTypes;
