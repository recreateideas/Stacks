import types from './types';

const setUser = user => ({
    type: types.SET_USER,
    data: user,
});

const loadThemeMode = () => {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    return {
        type: types.SET_THEME_MODE,
        data: isDarkMode,
    };
};

const setDarkMode = (isDarkMode) => {
    localStorage.setItem('isDarkMode', isDarkMode);
    return {
        type: types.SET_THEME_MODE,
        data: isDarkMode,
    };
};

export {
    setUser,
    setDarkMode,
    loadThemeMode,
};
