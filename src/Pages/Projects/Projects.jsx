import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddCircleOutline } from '@material-ui/icons';
import { actions, selectors, useSelector } from '../../redux';
import {
    Container, AddProject, ProjectCategory, Slots,
} from './styles';
// eslint-disable-next-line import/no-cycle
import { ProjectSlot } from '../../features';
import { openViewInNewWindow } from '../../utils';
import { Loader } from '../../components';

const Projects = () => {
    const dispatch = useDispatch();
    const { projects: { getProjects, projectsLoadPending, findFiles } } = actions;
    const { projects: projectSelectors } = selectors;
    const projects = useSelector(projectSelectors.projects);
    const projectsLoading = useSelector(projectSelectors.projectsLoading);
    const editYaml = (path) => {
        localStorage.setItem('edit-yaml', path);
        const config = {
            width: 700,
            height: 700,
            title: `Code Editor - ${path}`,
        };
        dispatch(projectsLoadPending);
        openViewInNewWindow('ProjectEditYaml', config);
    };
    const addProjects = () => {
        dispatch(findFiles(['projects']));
    };
    useEffect(() => {
        dispatch(getProjects());
        // eslint-disable-next-line
    }, []);
    return (
        <Container className="projects-page">
            {['localStorage', 'live'].map((category, i) => (
                <Slots key={i}>
                    {projects && projects[category] && Object
                        .keys(projects[category])
                        .map((path, j) => {
                            const project = projects[category][path];
                            return (
                                <ProjectCategory key={j} className={`category ${category}`}>
                                    <ProjectSlot
                                        path={path}
                                        category={category}
                                        project={project}
                                        onYamlClick={() => editYaml(path)}
                                    />
                                </ProjectCategory>
                            );
                        })
                    }
                </Slots>
            ))}
            {projectsLoading && <Loader type="dots" mode="full-screen" />}
            <AddProject>
                <AddCircleOutline onClick={addProjects} />
            </AddProject>
        </Container>
    );
};

export default Projects;
