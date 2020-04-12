const parseLabels = labels => labels
    .split(',')
    .reduce((object, pair) => {
        const [key, value] = pair.split('=');
        return {
            ...object,
            [key]: value,
        };
    }, {});

const reduceArrayToObj = array => ({ key }) => array
    .reduce((allContainers, container) => ({
        ...allContainers,
        [container[key]]: container,
    }), {});

module.exports = {
    reduceArrayToObj,
    parseLabels,
};
