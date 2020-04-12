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
    path {
        color: ${(props) => {
        const { isActive, theme: { palette, isDark } } = props;
        // return palette.primary['100'];
        return isDark && isActive ? palette.primary['700'] : palette.primary['100'];
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
        // return palette.primary['100'];
        return isDark && isActive ? palette.primary['700'] : palette.primary['100'];
    }};
`;

export {
    Container,
    IconWrap,
    LabelWrap,
};
