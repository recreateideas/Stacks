import React from 'react';
import {
    PlayCircleOutline, Eject, HdrWeak, List, LaptopMac, ExpandMore, ExpandLess,
} from '@material-ui/icons';
import propTypes from './propTypes';
import { Container, Action } from './styles';

const Actions = (props) => {
    const { onSelect, isActive, isExpanded } = props;
    const onClick = (action) => {
        onSelect(action);
    };
    // start/restart, clone, logs, docker exec -it, expand
    const ExpandIcon = isExpanded ? ExpandMore : ExpandLess;
    const startStatusClass = isActive ? 'inactive' : '';
    const stopStatusClass = !isActive ? 'inactive' : '';
    return (
        <Container className="actions">
            <Action className={`start with-hover ${startStatusClass}`}>
                <PlayCircleOutline onClick={() => onClick('start')} />
            </Action>
            <Action className={`stop with-hover ${stopStatusClass}`}>
                <Eject onClick={() => onClick('stop')} />
            </Action>
            <Action className="with-hover">
                <HdrWeak onClick={() => onClick('clone')} />
            </Action>
            <Action className="with-hover">
                <List onClick={() => onClick('logs')} />
            </Action>
            <Action className="with-hover">
                <LaptopMac onClick={() => onClick('docker-exec')} />
            </Action>
            <Action className="with-hover">
                <ExpandIcon onClick={() => onClick('expand')} />
            </Action>
        </Container>
    );
};

Actions.propTypes = propTypes;

export default Actions;
