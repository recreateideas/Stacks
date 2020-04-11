const eventHandler = (list) => {
    const newContainersEvents = list.filter(item => item.Type === 'container');
    // const newVolumesEvents = list.filter(item => item.Type === 'volume');
    // const newNetworkEvents = list.filter(item => item.Type === 'volume');
    console.log(newContainersEvents);
};

module.exports = eventHandler;
