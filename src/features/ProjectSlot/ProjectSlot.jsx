import React, { useState } from 'react';
import propTypes from './propTypes';
import {
    Container, Path, MainData, Table, Row, Cell, Label, Value, Strong,
} from './styles';
import Actions from './Actions';
import { StatusIndicator, Loader } from '../../components';
import DetailsDrawer from './DetailsDrawer';

const ProjectSlot = (props) => {
    const { onYamlClick, path, project } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const { name: projectName = 'Unnamed Project', version = 'N/A', networks } = project;
    const networkNames = Object.keys(networks).join(', ');
    const { length: containersNo } = Object.keys(project.services);
    const displayPath = `${path.replace(/^\//, '')}/`;
    const handleAction = (action) => {
        switch (action) {
            case 'expand':
                setIsExpanded(!isExpanded);
                break;
            case 'yaml':
                onYamlClick();
                break;
            default: break;
        }
    };
    const statusActive = true;
    const statusMap = {
        true: 'Active',
        false: 'Inactive',
    };
    const status = statusMap[statusActive.toString()];
    const isLoading = false;
    return (
        <Container>
            {isLoading && <Loader type="dots" mode="boxed" />}
            <MainData className="project-slot">
                <Table>
                    <Row>
                        <Cell>
                            <Strong className="slot-name interactive">{projectName}</Strong>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Label>Compose:</Label>
                            <Value>
                                <Path>
                                    {displayPath}
                                </Path>
                            </Value>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Label>Version:</Label>
                            <Value>{version}</Value>
                        </Cell>
                        <Cell>
                            <Label>Containers:</Label>
                            <Value>{containersNo}</Value>
                        </Cell>
                        <Cell>
                            <Label>Networks:</Label>
                            <Value>{networkNames}</Value>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell className="status">
                            <StatusIndicator isActive={statusActive} />
                            <Label>Status:</Label>
                            <Value>{status}</Value>
                        </Cell>
                    </Row>
                </Table>
                <Actions
                    onSelect={handleAction}
                    statusActive={statusActive}
                    isExpanded={isExpanded}
                />
            </MainData>
            <DetailsDrawer isExpanded={isExpanded} />
        </Container>
    );
};

ProjectSlot.propTypes = propTypes;

export default ProjectSlot;
