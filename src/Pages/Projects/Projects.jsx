import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddCircleOutline } from '@material-ui/icons';
import { actions, selectors, useSelector } from '../../redux';
import { Container, AddProject, Slots } from './styles';
// eslint-disable-next-line import/no-cycle
import { ProjectSlot } from '../../features';
import { openViewInNewWindow } from '../../utils';

const Projects = () => {
    const dispatch = useDispatch();
    const { projects: { getProjects } } = actions;
    const { projects: projectSelectors } = selectors;
    const projects = useSelector(projectSelectors.projects);
    const editYaml = (path) => {
        localStorage.setItem('edit-yaml', path);
        const config = {
            width: 700,
            height: 700,
        };
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
                    .filter(project => project !== 'yamls')
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
            <AddProject>
                <AddCircleOutline />
            </AddProject>
        </Container>
    );
};

export default Projects;
