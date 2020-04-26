import React from 'react';
import {
    PlayCircleOutline, Eject, Code, ExpandMore, ExpandLess, RotateLeft,
} from '@material-ui/icons';
import propTypes from './propTypes';
import { Container, Action } from './styles';

const Actions = (props) => {
    const { onSelect, isExpanded, isActive } = props;
    const onClick = (action) => {
        onSelect(action);
    };
    const ExpandIcon = isExpanded ? ExpandMore : ExpandLess;
    const StartIcon = isActive ? RotateLeft : PlayCircleOutline;
    const stopStatusClass = !isActive ? 'inactive' : '';
    return (
        <Container className="actions">
            <Action className="yaml with-hover">
                <Code onClick={() => onClick('yaml')} />
            </Action>
            <Action className="start with-hover">
                <StartIcon onClick={() => onClick('up')} />
            </Action>
            <Action className={`stop with-hover ${stopStatusClass}`}>
                <Eject onClick={() => isActive && onClick('down')} />
            </Action>
            <Action className="expand with-hover">
                <ExpandIcon onClick={() => onClick('expand')} />
            </Action>
        </Container>
    );
};

Actions.propTypes = propTypes;

export default Actions;
