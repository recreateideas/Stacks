import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import { selectors, useSelector } from '../../redux';
import propTypes from './propTypes';
import { Container } from './styles';

const ProjectEditYaml = () => {
    const yamlPath = localStorage.getItem('edit-yaml');
    const { projects: projectSelectors } = selectors;
    const project = useSelector(projectSelectors.projectByPath(yamlPath));
    return (
        <Container>
            <AceEditor
                mode="json"
                theme="solarized_dark"
                wrapEnabled
                enableSnippets
                onChange={() => { }}
                fontSize={14}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                value={JSON.stringify(project, null, 4)}
            />
        </Container>
    );
};

ProjectEditYaml.propTypes = propTypes;

export default ProjectEditYaml;
