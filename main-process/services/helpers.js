const parseLabels = labels => labels
    .split(',')
    .reduce((object, pair) => {
        const [key, value] = pair.split('=');
        return {
            ...object,
            [key]: value,
        };
    }, {});

const reduceContainersToObj = containers => containers
    .reduce((allContainers, container) => ({
        ...allContainers,
        [container.ID]: container,
    }), {});

module.exports = {
    reduceContainersToObj,
    parseLabels,
};
