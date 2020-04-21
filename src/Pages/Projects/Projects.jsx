import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddCircleOutline } from '@material-ui/icons';
import { actions, selectors, useSelector } from '../../redux';
import { Container, AddProject, Slots } from './styles';
// eslint-disable-next-line import/no-cycle
import { ProjectSlot } from '../../features';
import { openViewInNewWindow } from '../../utils';
import { Loader } from '../../components';

const Projects = () => {
    const dispatch = useDispatch();
    const { projects: { getProjects, projectsLoadPending } } = actions;
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
    useEffect(() => {
        dispatch(getProjects());
    // eslint-disable-next-line
    }, []);
    return (
        <Container className="projects-page">
            <Slots>
                {projects && Object
                    .keys(projects)
                    .filter(project => project !== 'yamls' && project !== 'loading')
                    .map((path, index) => {
                        const project = projects[path];
                        return (
                            <ProjectSlot
                                key={index}
                                path={path}
                                project={project}
                                onYamlClick={() => editYaml(path)}
                            />
                        );
                    })
                }
            </Slots>
            { projectsLoading && <Loader type="dots" mode="full-screen" /> }
            <AddProject>
                <AddCircleOutline />
            </AddProject>
        </Container>
    );
};

export default Projects;
