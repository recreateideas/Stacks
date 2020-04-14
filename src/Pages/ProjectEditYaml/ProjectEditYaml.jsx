import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectors, actions, useSelector } from '../../redux';
import propTypes from './propTypes';
import { Container, ControlsContainer } from './styles';
import { CodeEditor, CodeControls } from '../../components';
import { saveContentToFile } from '../../utils';

const ProjectEditYaml = () => {
    const dispatch = useDispatch();
    const yamlPath = localStorage.getItem('edit-yaml');
    const { projects: projectSelectors } = selectors;
    const { projects: { getYamlContent } } = actions;
    const project = useSelector(projectSelectors.yamlByPath(yamlPath));
    const [editorContent, setEditorContent] = useState();
    const [fontSize, setFontSize] = useState(14);
    const onAction = (action) => {
        switch (action) {
            case 'zoom-in':
                if (fontSize < 40) {
                    setFontSize(fontSize + 1);
                }
                break;
            case 'zoom-out':
                if (fontSize > 9) {
                    setFontSize(fontSize - 1);
                }
                break;
            case 'save':
                saveContentToFile(yamlPath, editorContent, 'as-is');
                break;
            default: break;
        }
    };
    useEffect(() => {
        dispatch(getYamlContent(yamlPath));
    // eslint-disable-next-line
    }, []);
    useEffect(() => {
        setEditorContent(project);
    // eslint-disable-next-line
    }, [JSON.stringify(project)]);
    return (
        <Container>
            <ControlsContainer className="code-controls">
                <CodeControls onClick={onAction} />
            </ControlsContainer>
            <CodeEditor
                id="code-edit-compose"
                mode="yaml"
                onChange={newContent => setEditorContent(newContent)}
                value={editorContent}
                fontSize={fontSize}
            />
        </Container>
    );
};

ProjectEditYaml.propTypes = propTypes;

export default ProjectEditYaml;
