/* eslint-disable no-case-declarations */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../../redux';
import propTypes from './propTypes';
import {
    Container, MainData, Row, Cell, Label, Value, Table, Strong,
} from './styles';
import { StatusIndicator, Loader } from '../../../components';
import Actions from './Actions';
import ExtendedPanel from './ExtendedPanel';
import { openTerminalWithCommand } from '../../../utils';

const DockerContainer = (props) => {
    const { containerId, onShowLogs } = props;
    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(false);
    const { containers: { runContainerAction } } = actions;
    const { containers: containersSelectors } = selectors;
    const containerData = useSelector(containersSelectors.container(containerId));
    const {
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
        loading: isLoading,
    } = containerData;
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
                    containerId,
                };
                dispatch(runContainerAction(args));
                break;
            case 'docker-exec':
                openTerminalWithCommand('docker-exec', { serviceName });
                break;
            case 'logs':
                onShowLogs({ serviceName });
                break;
            default: break;
        }
    };
    return (
        <Container className="container">
            {isLoading && <Loader type="dots" mode="boxed" />}
            <MainData>
                <Table>
                    <Row>
                        <Cell>
                            <Strong className="service-name">{serviceName}</Strong>
                        </Cell>
                        <Cell>
                            <Row>
                                <Label className="containerId">ID:</Label>
                                <Value className="containerId">{containerId}</Value>
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
                containerId={containerId}
                serviceName={serviceName}
            />

        </Container>
    );
};

DockerContainer.propTypes = propTypes;

export default DockerContainer;
