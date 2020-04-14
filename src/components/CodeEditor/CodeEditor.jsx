import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds';
// import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import propTypes from './propTypes';
import { Container } from './styles';

const CodeEditor = (props) => {
    const {
        mode,
        onChange,
        id,
        value,
        fontSize = 14,
        stringify = true,
        wrapEnabled = true,
        children,
    } = props;
    const normalizedValue = stringify && typeof value === 'object'
        ? JSON.stringify(value, null, 4)
        : value;
    return (
        <Container>
            <AceEditor
                mode={mode}
                theme="solarized_dark"
                wrapEnabled={wrapEnabled}
                onChange={onChange}
                fontSize={fontSize}
                name={id}
                setOptions={{ useWorker: false }}
                editorProps={{ $blockScrolling: true }}
                value={normalizedValue}
                debounceChangePeriod={500}
                enableBasicAutocompletion
                focus
            />
            { children }
        </Container>
    );
};

CodeEditor.propTypes = propTypes;

export default CodeEditor;
