import styled from 'styled-components';
import { MenuItem } from '@material-ui/core';

const Container = styled.div`
    .MuiButtonBase-root.active {
        background-color: ${(props) => {
        const { theme: { isDark, palette } } = props;
        const color = isDark ? palette.primary['300'] : palette.primary['500']; // preserve color across themes
        return `${color} !important`;
    }};
    }
`;

const StyledItem = styled(MenuItem)`
`;
export {
    StyledItem,
    Container,
};
