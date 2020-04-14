import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import propTypes from './propTypes';
import { Container } from './styles';

const CodeEditor = (props) => {
    const {
        mode,
        onChange,
        id,
        value,
        stringify = true,
        wrapEnabled = true,
        enableSnippets = true,
        children,
    } = props;
    const normalizedValue = stringify
        ? JSON.stringify(value, null, 4)
        : value;
    return (
        <Container>
            <AceEditor
                mode={mode}
                theme="solarized_dark"
                wrapEnabled={wrapEnabled}
                enableSnippets={enableSnippets}
                onChange={onChange}
                fontSize={14}
                name={id}
                editorProps={{ $blockScrolling: true }}
                value={normalizedValue}
            />
            { children }
        </Container>
    );
};

CodeEditor.propTypes = propTypes;

export default CodeEditor;
