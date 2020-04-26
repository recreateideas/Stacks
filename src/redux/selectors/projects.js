const projects = state => state.appState.projects;
const liveProjects = state => state.appState.projects.live;
const localStorageProjects = state => state.appState.projects.localStorage;
// const projectByPath = path => state => state.appState.projects[path];
const yamlByPath = path => state => state.appState.projects.yamls[path];
const projectsLoading = state => state.appState.projects.loading;

export {
    projects,
    liveProjects,
    localStorageProjects,
    // projectByPath,
    yamlByPath,
    projectsLoading,
};
