const parseLabels = labels => labels
    .split(',')
    .reduce((object, pair) => {
        const [key, value] = pair.split('=');
        return {
            ...object,
            [key]: value,
        };
    }, {});

module.exports = {
    parseLabels,
};
