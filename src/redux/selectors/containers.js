const containers = state => state.appState.containers;

const container = containerId => state => state.appState.containers[containerId];

export {
    containers,
    container,
};
