import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';

const Projects = () => {
    const dispatch = useDispatch();
    const { projects: { getProjects } } = actions;
    const { projects: projectsSelectors } = selectors;
    const projects = useSelector(projectsSelectors.projects);
    useEffect(() => {
        dispatch(getProjects());
    }, []);
    return (
        <div> Projects {JSON.stringify(projects)}</div>
    );
};

export default Projects;
