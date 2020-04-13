import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const IconWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-left: 8px; */
    * {
        color: ${(props) => {
        const { isActive, theme: { palette, isDark } } = props;
        const activeColor = isDark ? palette.primary['900'] : palette.primary.zero;
        const inactiveColor = isDark ? palette.primary['700'] : palette.primary['100'];
        return isActive ? activeColor : inactiveColor;
        // return isDark && isActive ? palette.primary['700'] : palette.primary['100'];
    }};
    }
`;

const LabelWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
    color: ${(props) => {
        const { isActive, theme: { palette, isDark } } = props;
        const activeColor = isDark ? palette.primary['900'] : palette.primary.zero;
        const inactiveColor = isDark ? palette.primary['700'] : palette.primary['100'];
        return isActive ? activeColor : inactiveColor;
    }};
`;

export {
    Container,
    IconWrap,
    LabelWrap,
};
