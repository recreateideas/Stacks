import React, { useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { actions, selectors, useSelector } from '../../redux';
import GlobalStyle from './GlobalStyle';
import * as themes from './themes';
import propTypes from './propTypes';

const Theme = (props) => {
    const dispatch = useDispatch();
    const { children } = props;
    const { user: { loadThemeMode } } = actions;
    const { user: userSelectors } = selectors;
    const isDark = useSelector(userSelectors.isDarkMode);
    const mode = isDark ? 'dark' : 'light';
    const theme = themes[mode];
    const {
        palette: { neutral },
    } = theme;
    useLayoutEffect(() => {
        document.body.style.backgroundColor = neutral['100'];
    }, [mode, neutral]);
    const fixedToLight = value => (isDark ? 800 - value : value);
    useLayoutEffect(() => {
        dispatch(loadThemeMode());
    // eslint-disable-next-line
    }, []);
    return (
        <>
            <ThemeProvider theme={{ ...theme, isDark, fixedToLight }}>
                {children}
            </ThemeProvider>
            <GlobalStyle theme={{ ...theme }} />
        </>
    );
};

Theme.propTypes = propTypes;

export default Theme;
