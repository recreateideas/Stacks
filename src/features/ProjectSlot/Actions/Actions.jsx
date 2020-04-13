import React from 'react';
import {
    PlayCircleOutline, Eject, Code, ExpandMore, ExpandLess,
} from '@material-ui/icons';
import propTypes from './propTypes';
import { Container, Action } from './styles';

const Actions = (props) => {
    const { onSelect, isExpanded } = props;
    const onClick = (action) => {
        onSelect(action);
    };
    const ExpandIcon = isExpanded ? ExpandMore : ExpandLess;
    return (
        <Container className="actions">
            <Action className="yaml">
                <Code onClick={() => onClick('yaml')} />
            </Action>
            <Action>
                <PlayCircleOutline onClick={() => onClick('start')} />
            </Action>
            <Action>
                <Eject onClick={() => onClick('stop')} />
            </Action>
            <Action className="expand">
                <ExpandIcon onClick={() => onClick('expand')} />
            </Action>
        </Container>
    );
};

Actions.propTypes = propTypes;

export default Actions;
