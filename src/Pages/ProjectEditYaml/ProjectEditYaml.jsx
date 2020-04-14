import React from 'react';
import { selectors, useSelector } from '../../redux';
import propTypes from './propTypes';
import { Container, ControlsContainer } from './styles';
import { CodeEditor, CodeControls } from '../../components';

const ProjectEditYaml = () => {
    const yamlPath = localStorage.getItem('edit-yaml');
    const { projects: projectSelectors } = selectors;
    const project = useSelector(projectSelectors.projectByPath(yamlPath));
    return (
        <Container>
            <ControlsContainer className="code-controls">
                <CodeControls />
            </ControlsContainer>
            <CodeEditor
                id="code-edit-compose"
                mode="json"
                onChange={() => {}}
                value={project}
            />
        </Container>
    );
};

ProjectEditYaml.propTypes = propTypes;

export default ProjectEditYaml;
