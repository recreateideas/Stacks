import PropTypes from 'prop-types';

const propTypes = {
    path: PropTypes.string,
    project: PropTypes.object,
    category: PropTypes.string,
    onYamlClick: PropTypes.func,
    onProjectUpdate: PropTypes.func,
};

export default propTypes;
