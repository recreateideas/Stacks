import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';
import { Container, Slots } from './styles';
import { ProjectSlot } from '../../features';

const Projects = () => {
    const dispatch = useDispatch();
    const { projects: { getProjects } } = actions;
    const { projects: projectSelectors } = selectors;
    const projects = useSelector(projectSelectors.projects);
    useEffect(() => {
        dispatch(getProjects());
    // eslint-disable-next-line
    }, []);
    return (
        <Container className="projects-page">
            <Slots>
                {projects && Object
                    .keys(projects)
                    .map((path, index) => {
                        const project = projects[path];
                        return (
                            <ProjectSlot
                                key={index}
                                path={path}
                                yaml={project}
                            />
                        );
                    })}
            </Slots>
        </Container>
    );
};

export default Projects;
