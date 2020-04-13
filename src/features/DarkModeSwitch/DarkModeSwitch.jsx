import React from 'react';
import { Brightness2, WbSunny } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';
import propTypes from './propTypes';
import { Container } from './styles';
import { Toggle } from '../../components';

const DarkModeSwitch = () => {
    const dispatch = useDispatch();
    const { user: { setDarkMode } } = actions;
    const { user: userSelectors } = selectors;
    const isDarkMode = !!useSelector(userSelectors.isDarkMode);
    const onDarkModeChange = (event) => {
        const { target: { checked: changedMode } } = event;
        dispatch(setDarkMode(changedMode));
    };
    return (
        <Container>
            <Toggle
                icon={<WbSunny className="unchecked-icon" />}
                checkedIcon={<Brightness2 className="checked-icon" />}
                disableRipple
                onChange={onDarkModeChange}
                checked={isDarkMode}
            />
        </Container>
    );
};

DarkModeSwitch.propTypes = propTypes;

export default DarkModeSwitch;
