import React from 'react';
import {
    PlayCircleOutline, Eject, Code, ExpandMore, ExpandLess,
} from '@material-ui/icons';
import propTypes from './propTypes';
import { Container, Action } from './styles';

const Actions = (props) => {
    const { onSelect, isExpanded, statusActive } = props;
    const onClick = (action) => {
        onSelect(action);
    };
    const ExpandIcon = isExpanded ? ExpandMore : ExpandLess;
    const startStatusClass = statusActive ? 'inactive' : '';
    const stopStatusClass = !statusActive ? 'inactive' : '';
    return (
        <Container className="actions">
            <Action className="yaml with-hover">
                <Code onClick={() => onClick('yaml')} />
            </Action>
            <Action className={`start with-hover ${startStatusClass}`}>
                <PlayCircleOutline onClick={() => !statusActive && onClick('start')} />
            </Action>
            <Action className={`stop with-hover ${stopStatusClass}`}>
                <Eject onClick={() => statusActive && onClick('stop')} />
            </Action>
            <Action className="expand">
                <ExpandIcon onClick={() => onClick('expand')} />
            </Action>
        </Container>
    );
};

Actions.propTypes = propTypes;

export default Actions;
