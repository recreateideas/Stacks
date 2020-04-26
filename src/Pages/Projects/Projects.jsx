import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddCircleOutline } from '@material-ui/icons';
import { actions, selectors, useSelector } from '../../redux';
import {
    Container, AddProject, ProjectCategory, Slots, Title,
} from './styles';
// eslint-disable-next-line import/no-cycle
import { ProjectSlot } from '../../features';
import { openViewInNewWindow } from '../../utils';
import { Loader } from '../../components';

const Projects = () => {
    const dispatch = useDispatch();
    const {
        projects: {
            setProject, getProjects, projectsLoadPending, findFiles,
        },
    } = actions;
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
    const updateProject = (project) => {
        dispatch(setProject(project));
    };
    useEffect(() => {
        dispatch(getProjects());
        // eslint-disable-next-line
    }, []);
    return (
        <Container className="projects-page">
            {['localStorage', 'live'].map((category, i) => {
                const titleMap = {
                    localStorage: 'Saved',
                    live: 'Currently Up',
                };
                const title = titleMap[category];
                const hasUp = category === 'live' && projects[category] && projects[category].length;
                return (
                    <ProjectCategory key={i} className={`category ${category}`}>
                        <Slots>
                            {hasUp && <Title><span>{title}</span></Title>}
                            {projects && projects[category] && Object
                                .keys(projects[category])
                                .map((path, j) => {
                                    const project = projects[category][path];
                                    return (
                                        <ProjectSlot
                                            key={j}
                                            path={path}
                                            category={category}
                                            project={project}
                                            onYamlClick={() => editYaml(path)}
                                            onProjectUpdate={updateProject}
                                        />
                                    );
                                })
                            }
                        </Slots>
                    </ProjectCategory>
                );
            })}
            {projectsLoading && <Loader type="dots" mode="full-screen" />}
            <AddProject>
                <AddCircleOutline onClick={addProjects} />
            </AddProject>
        </Container>
    );
};

export default Projects;
