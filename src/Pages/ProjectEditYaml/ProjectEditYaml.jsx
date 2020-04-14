import React, { useState } from 'react';
import { selectors, useSelector } from '../../redux';
import propTypes from './propTypes';
import { Container, ControlsContainer } from './styles';
import { CodeEditor, CodeControls } from '../../components';

const ProjectEditYaml = () => {
    const yamlPath = localStorage.getItem('edit-yaml');
    const { projects: projectSelectors } = selectors;
    const project = useSelector(projectSelectors.projectByPath(yamlPath));
    const [editorContent, setEditorContent] = useState(project);
    const [fontSize, useFontSize] = useState(14);
    const onAction = (action) => {
        switch (action) {
            case 'zoom-in':
                if (fontSize < 40) {
                    useFontSize(fontSize + 1);
                }
                break;
            case 'zoom-out':
                if (fontSize > 9) {
                    useFontSize(fontSize - 1);
                }
                break;
            case 'save':
                localStorage.setItem(yamlPath, editorContent);
                break;
            default: break;
        }
    };
    return (
        <Container>
            <ControlsContainer className="code-controls">
                <CodeControls onClick={onAction} />
            </ControlsContainer>
            <CodeEditor
                id="code-edit-compose"
                mode="json"
                onChange={newContent => setEditorContent(newContent)}
                value={project}
                fontSize={fontSize}
            />
        </Container>
    );
};

ProjectEditYaml.propTypes = propTypes;

export default ProjectEditYaml;
