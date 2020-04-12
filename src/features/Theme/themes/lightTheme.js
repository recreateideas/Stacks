const palette = {
    neutral: {
        100: '#F7F8F9',
        200: '#DCE4E9',
        300: '#C7D0D9',
        400: '#AEBDC7',
        500: '#7B8B9C',
        600: '#53606E',
        700: '#1D252D',
    },
    primary: {
        zero: '#FFFFFF',
        100: '#EBF7FE',
        200: '#9ACFF1',
        300: '#4B99CF',
        400: '#007ABD',
        500: '#005F95',
        600: '#064164',
        700: '#183649',
        800: '#0b1a23',
    },
    accents: {
        highlight: {
            100: '#E1FFFE',
            200: '#97ECE8',
            300: '#55D2CD',
            400: '#21A599',
            500: '#11867C',
            600: '#0A5A54',
            700: '#093D3B',
        },
        green: {
            100: '#DDFBEA',
            200: '#9AEBBC',
            300: '#61D499',
            400: '#21B96D',
            500: '#119253',
            600: '#096C3D',
            700: '#0C4833',
        },
        yellow: {
            100: '#FFFBF3',
            200: '#FFF1D4',
            300: '#FEDD9A',
            400: '#ffb840',
            500: '#C89941',
            600: '#856125',
            700: '#543F19',
        },
        red: {
            100: '#FDE4E5',
            200: '#F99FA1',
            300: '#E7575B',
            400: '#DF252D',
            500: '#B61920',
            600: '#82171B',
            700: '#591618',
        },
    },
};

const fonts = {
    primary: "'Roboto', sans-serif",
    h1: {
        fontSize: 20,
        color: palette.primary['700'],
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
