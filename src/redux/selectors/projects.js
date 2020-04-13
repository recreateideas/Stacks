const projects = state => state.appState.projects;
const projectByPath = path => state => state.appState.projects[path];

export {
    projects,
    projectByPath,
};
