const palette = {
    neutral: {
        700: '#F7F8F9',
        600: '#DCE4E9',
        500: '#C7D0D9',
        400: '#AEBDC7',
        300: '#7B8B9C',
        200: '#30363E',
        100: '#1D252D',
    },
    primary: {
        800: '#FFFFFF',
        700: '#EBF7FE',
        600: '#9ACFF1',
        500: '#4B99CF',
        400: '#007ABD',
        300: '#005F95',
        200: '#064164',
        100: '#183649',
        zero: '#0b1a23',
    },
    accents: {
        highlight: {
            700: '#E1FFFE',
            600: '#97ECE8',
            500: '#55D2CD',
            400: '#21A599',
            300: '#11867C',
            200: '#0A5A54',
            100: '#093D3B',
        },
        green: {
            700: '#DDFBEA',
            600: '#9AEBBC',
            500: '#61D499',
            400: '#21B96D',
            300: '#119253',
            200: '#096C3D',
            100: '#0C4833',
        },
        yellow: {
            700: '#FFFBF3',
            600: '#FFF1D4',
            500: '#FEDD9A',
            400: '#ffb840',
            300: '#C89941',
            200: '#856125',
            100: '#543F19',
        },
        red: {
            700: '#FDE4E5',
            600: '#F99FA1',
            500: '#E7575B',
            400: '#DF252D',
            300: '#B61920',
            200: '#82171B',
            100: '#591618',
        },
    },
};


const fonts = {
    primary: "'Roboto', sans-serif",
    h1: {
        fontSize: 20,
        color: palette.primary['400'],
    },
    'h1-negative': {
        fontSize: 20,
        color: palette.primary['100'],
    },
};

const lightTheme = {
    palette,
    fonts,
};

export default lightTheme;
