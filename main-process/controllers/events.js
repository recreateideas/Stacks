const handleDockerEvents = (list) => {
    const newContainersEvents = list.filter(item => item.Type === 'container');
    return newContainersEvents;
};

module.exports = handleDockerEvents;
