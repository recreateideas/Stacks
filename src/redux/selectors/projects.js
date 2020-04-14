const projects = state => state.appState.projects;
const projectByPath = path => state => state.appState.projects[path];
const yamlByPath = path => state => state.appState.projects.yamls[path];

export {
    projects,
    projectByPath,
    yamlByPath,
};
