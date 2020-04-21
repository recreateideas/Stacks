const projects = state => state.appState.projects;
const projectByPath = path => state => state.appState.projects[path];
const yamlByPath = path => state => state.appState.projects.yamls[path];
const projectsLoading = state => state.appState.projects.loading;

export {
    projects,
    projectByPath,
    yamlByPath,
    projectsLoading,
};
