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
    return (
        <Container className="actions">
            <Action className="yaml with-hover">
                <Code onClick={() => onClick('yaml')} />
            </Action>
            <Action className="start with-hover" statusActive={statusActive}>
                <PlayCircleOutline onClick={() => !statusActive && onClick('start')} />
            </Action>
            <Action className="stop with-hover" statusActive={statusActive}>
                <Eject onClick={() => statusActive && onClick('stop')} />
            </Action>
            <Action className="expand" statusActive={statusActive}>
                <ExpandIcon onClick={() => onClick('expand')} />
            </Action>
        </Container>
    );
};

Actions.propTypes = propTypes;

export default Actions;
