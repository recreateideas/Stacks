import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 8px;
    padding-right: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: fixed;
    bottom: 0;
    width: 200px;
    box-sizing: border-box;
    .MuiSvgIcon-root {
        cursor: pointer;
        path {
            color: ${(props) => {
        const { theme: { isDark } } = props;
        return isDark ? props.theme.palette.neutral['700'] : props.theme.palette.neutral['100'];
    }}
        }
    }
`;

export {
    // eslint-disable-next-line import/prefer-default-export
    Container,
};
