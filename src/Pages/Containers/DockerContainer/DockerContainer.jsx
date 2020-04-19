/* eslint-disable no-case-declarations */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux';
import propTypes from './propTypes';
import {
    Container, MainData, Row, Cell, Label, Value, Table, Strong,
} from './styles';
import { StatusIndicator } from '../../../components';
import Actions from './Actions';
import ExtendedPanel from './ExtendedPanel';

const DockerContainer = (props) => {
    const { data, onShowLogs } = props;
    const {
        ID: id = 'N/A',
        Image: image,
        Size: size = 'N/A',
        Labels: {
            'com.docker.compose.service': serviceName = 'N/A',
            'com.docker.compose.project.config_files': composeFile = 'N/A',
        },
        Networks: networks = 'N/A',
        Ports: ports = 'NA',
        Status: status = 'N/A',
        RunningFor: runningFor = 'N/A',
    } = data;
    const dispatch = useDispatch();
    const { containers: { runContainerAction } } = actions;
    const [isExpanded, setIsExpanded] = useState(false);
    const isRunning = /^Up/.test(status);
    const handleAction = (action) => {
        switch (action) {
            case 'expand':
                setIsExpanded(!isExpanded);
                break;
            case 'clone':
                break;
            case 'start':
            case 'restart':
            case 'stop':
                const args = {
                    action,
                    composeFile,
                    serviceName,
                };
                dispatch(runContainerAction(args));
                break;
            case 'logs':
                onShowLogs({ serviceName });
                break;
            default: break;
        }
    };
    console.log('render', serviceName);
    return (
        <Container className="container">
            <MainData>
                <Table>
                    <Row>
                        <Cell>
                            <Strong className="service-name">{serviceName}</Strong>
                        </Cell>
                        <Cell>
                            <Row>
                                <Label className="id">ID:</Label>
                                <Value className="id">{id}</Value>
                            </Row>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Label>Image:</Label>
                            <Value>{image}</Value>
                        </Cell>
                        <Cell>
                            <Label>Size:</Label>
                            <Value>{size}</Value>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Label>Compose:</Label>
                            <Value>{composeFile}</Value>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Label>Ports:</Label>
                            <Value>{ports}</Value>
                        </Cell>
                        <Cell>
                            <Label>Networks:</Label>
                            <Value>{networks}</Value>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell className="status">
                            <StatusIndicator isActive={isRunning} />
                            <Label>Status:</Label>
                            <Value>{status}</Value>
                        </Cell>
                        <Cell>
                            <Label>Up Time:</Label>
                            <Value>{runningFor}</Value>
                        </Cell>
                    </Row>
                </Table>
                <Actions
                    onSelect={handleAction}
                    isActive={isRunning}
                    isExpanded={isExpanded}
                />
            </MainData>
            <ExtendedPanel
                isExpanded={isExpanded}
                containerId={id}
                serviceName={serviceName}
            />
        </Container>
    );
};

DockerContainer.propTypes = propTypes;

export default DockerContainer;
