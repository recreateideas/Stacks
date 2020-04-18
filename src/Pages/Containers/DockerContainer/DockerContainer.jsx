import React from 'react';
import propTypes from './propTypes';
import {
    Container, Row, Cell, Label, Value, Table, Strong,
} from './styles';
import { StatusIndicator } from '../../../components';

const DockerContainer = (props) => {
    const { data } = props;
    const {
        Names: name = 'N/A',
        ID: id = 'N/A',
        Image: image,
        Size: size = 'N/A',
        Labels: {
            'com.docker.compose.project.config_files': composeFile = 'N/A',
        },
        Networks: networks = 'N/A',
        Ports: ports = 'NA',
        Status: status = 'N/A',
        RunningFor: runningFor = 'N/A',
    } = data;
    const isRunning = /^Up/.test(status);
    return (
        <Container className="container">
            <Table>
                <Row>
                    <Cell>
                        <Strong>{name}</Strong>
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
        </Container>
    );
};

DockerContainer.propTypes = propTypes;

export default DockerContainer;
