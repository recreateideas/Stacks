import React from 'react';
import {
    Save, ZoomIn, ZoomOut,
} from '@material-ui/icons';
import propTypes from './propTypes';
import { Container, Action } from './styles';

const CodeControls = (props) => {
    const { onClick } = props;
    return (
        <Container className="action-tray">
            <Action className="action-button">
                <ZoomIn onClick={() => onClick('zoom-in')} />
            </Action>
            <Action className="action-button">
                <ZoomOut onClick={() => onClick('zoom-out')} />
            </Action>
            <Action className="action-button">
                <Save onClick={() => onClick('save')} />
            </Action>
        </Container>
    );
};

CodeControls.propTypes = propTypes;

export default CodeControls;
