import React, { useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import * as themes from './themes';
import propTypes from './propTypes';

const Theme = (props) => {
    const { children } = props;
    const mode = 'light';
    const isDark = mode === 'dark';
    const theme = themes[mode];
    const {
        palette: { background },
    } = theme;
    useLayoutEffect(() => {
        document.body.style.backgroundColor = background;
    }, [mode]);
    return (
        <>
            <ThemeProvider theme={{ ...theme, isDark }}>
                {children}
            </ThemeProvider>
            <GlobalStyle />
        </>
    );
};

Theme.propTypes = propTypes;

export default Theme;
