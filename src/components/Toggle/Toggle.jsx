import React from 'react';
import { Switch } from '@material-ui/core';
import propTypes from './propTypes';
import { Container } from './styles';

const Toggle = (props) => {
    const {
        onChange, icon, checkedIcon, disableRipple, checked,
    } = props;
    return (
        <Container>
            <Switch
                className="toggle"
                icon={icon}
                checkedIcon={checkedIcon}
                onChange={onChange}
                disableRipple={disableRipple}
                checked={checked}
            />
        </Container>
    );
};

Toggle.propTypes = propTypes;

export default Toggle;
