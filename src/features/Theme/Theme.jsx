import React, { useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import * as themes from './themes';
import propTypes from './propTypes';

const Theme = (props) => {
    const { children } = props;
    const mode = 'dark';
    const isDark = mode === 'dark';
    const theme = themes[mode];
    const {
        palette: { neutral },
    } = theme;
    useLayoutEffect(() => {
        document.body.style.backgroundColor = neutral['100'];
    }, [mode, neutral]);
    return (
        <>
            <ThemeProvider theme={{ ...theme, isDark }}>
                {children}
            </ThemeProvider>
            <GlobalStyle theme={{ ...theme }} />
        </>
    );
};

Theme.propTypes = propTypes;

export default Theme;